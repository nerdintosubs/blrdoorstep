#!/usr/bin/env node
import { Command } from "commander";
import SwaggerClient from "swagger-client";

const DEFAULT_SPEC_URL = "https://open-api.netlify.com/swagger.json";

function collectParams(value, previous) {
  return previous.concat([value]);
}

function parseParams(paramPairs) {
  const params = {};
  for (const pair of paramPairs) {
    const index = pair.indexOf("=");
    if (index === -1) {
      throw new Error(`Invalid param '${pair}'. Use key=value.`);
    }
    const key = pair.slice(0, index).trim();
    const rawValue = pair.slice(index + 1).trim();
    params[key] = rawValue;
  }
  return params;
}

function parseJson(input, label) {
  try {
    return JSON.parse(input);
  } catch (error) {
    throw new Error(`${label} must be valid JSON.`);
  }
}

async function buildClient({ specUrl, specModule, token }) {
  const config = {
    requestInterceptor: (request) => {
      if (token) {
        request.headers = request.headers ?? {};
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    },
  };

  if (specModule) {
    const specImport = await import(specModule);
    const spec = specImport.default ?? specImport;
    return SwaggerClient({ spec, ...config });
  }

  return SwaggerClient({ url: specUrl, ...config });
}

const program = new Command();
program
  .name("netlify-openapi")
  .description("CLI wrapper for Netlify OpenAPI operations")
  .version("0.1.0");

program
  .command("operations")
  .description("List available operationIds from the spec")
  .option("--spec-url <url>", "OpenAPI/Swagger spec URL", DEFAULT_SPEC_URL)
  .option(
    "--spec-module <module>",
    "Load spec from an npm module (e.g., @netlify/open-api)"
  )
  .action(async (options) => {
    const client = await buildClient({
      specUrl: options.specUrl,
      specModule: options.specModule,
      token: null,
    });
    const operations = [];
    const paths = client.spec?.paths ?? {};

    for (const [path, methods] of Object.entries(paths)) {
      for (const [method, detail] of Object.entries(methods)) {
        if (!detail || typeof detail !== "object") continue;
        if (detail.operationId) {
          operations.push({
            operationId: detail.operationId,
            method: method.toUpperCase(),
            path,
          });
        }
      }
    }

    if (operations.length === 0) {
      console.log("No operations found in the spec.");
      return;
    }

    operations.sort((a, b) => a.operationId.localeCompare(b.operationId));
    console.log(JSON.stringify(operations, null, 2));
  });

program
  .command("call")
  .description("Execute an operationId with parameters")
  .argument("<operationId>", "Operation ID from the spec")
  .option("--param <key=value>", "Operation parameter (repeatable)", collectParams, [])
  .option("--body <json>", "JSON request body (mapped to 'body')")
  .option("--spec-url <url>", "OpenAPI/Swagger spec URL", DEFAULT_SPEC_URL)
  .option(
    "--spec-module <module>",
    "Load spec from an npm module (e.g., @netlify/open-api)"
  )
  .action(async (operationId, options) => {
    const token = process.env.NETLIFY_AUTH_TOKEN;
    if (!token) {
      console.error("Missing NETLIFY_AUTH_TOKEN environment variable.");
      process.exitCode = 1;
      return;
    }

    let parameters = {};
    try {
      parameters = parseParams(options.param ?? []);
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
      return;
    }

    if (options.body) {
      try {
        parameters.body = parseJson(options.body, "--body");
      } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
        return;
      }
    }

    try {
      const client = await buildClient({
        specUrl: options.specUrl,
        specModule: options.specModule,
        token,
      });
      const response = await client.execute({ operationId, parameters });
      const payload = response.body ?? response.data ?? response;
      console.log(JSON.stringify(payload, null, 2));
    } catch (error) {
      console.error(error.message ?? error);
      process.exitCode = 1;
    }
  });

program.parseAsync(process.argv);
