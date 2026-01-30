import { Command } from "commander";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import createClient from "openapi-fetch";
import type { paths } from "../generated/netlify-openapi";

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
  } catch {
    throw new Error(`${label} must be valid JSON.`);
  }
}

function buildClient(baseUrl, token) {
  if (!token) {
    throw new Error("Missing NETLIFY_AUTH_TOKEN environment variable.");
  }
  return createClient<paths>({
    baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

async function loadSpec(specPath) {
  const raw = await readFile(specPath, "utf-8");
  return JSON.parse(raw);
}

function resolveSpecPath(specPath) {
  if (specPath) {
    return resolve(process.cwd(), specPath);
  }
  return resolve(process.cwd(), "spec/netlify-openapi.json");
}

const program = new Command();
program
  .name("netlify-openapi-typed")
  .description("Typed CLI powered by generated Netlify OpenAPI client")
  .version("0.1.0");

program
  .command("operations")
  .description("List available API methods from the generated client")
  .option(
    "--spec <path>",
    "Path to OpenAPI spec JSON (default: spec/netlify-openapi.json)"
  )
  .action(async (options) => {
    try {
      const specPath = resolveSpecPath(options.spec);
      const spec = await loadSpec(specPath);
      const operations = [];
      const pathsSpec = spec.paths ?? {};

      for (const [path, methods] of Object.entries(pathsSpec)) {
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

      operations.sort((a, b) => a.operationId.localeCompare(b.operationId));
      console.log(JSON.stringify(operations, null, 2));
    } catch (error) {
      console.error(error.message ?? error);
      process.exitCode = 1;
    }
  });

program
  .command("call")
  .description("Execute a request using the generated types")
  .argument("<method>", "HTTP method (GET, POST, PUT, PATCH, DELETE)")
  .argument("<path>", "API path (example: /sites or /sites/{site_id})")
  .option("--path-param <key=value>", "Path parameter (repeatable)", collectParams, [])
  .option("--query <key=value>", "Query string parameter (repeatable)", collectParams, [])
  .option("--body <json>", "JSON request body")
  .option(
    "--base-url <url>",
    "Override API base URL (default uses spec basePath)"
  )
  .action(async (method, path, options) => {
    let pathParams = {};
    let queryParams = {};
    try {
      pathParams = parseParams(options.pathParam ?? []);
      queryParams = parseParams(options.query ?? []);
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
      return;
    }

    let body;
    if (options.body) {
      try {
        body = parseJson(options.body, "--body");
      } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
        return;
      }
    }

    try {
      const client = buildClient(
        options.baseUrl ?? "https://api.netlify.com/api/v1",
        process.env.NETLIFY_AUTH_TOKEN
      );
      const upper = method.toUpperCase();
      const requestOptions = {
        params: {
          path: pathParams,
          query: queryParams,
        },
        body,
      };
      let result;
      switch (upper) {
        case "GET":
          result = await client.GET(path, requestOptions);
          break;
        case "POST":
          result = await client.POST(path, requestOptions);
          break;
        case "PUT":
          result = await client.PUT(path, requestOptions);
          break;
        case "PATCH":
          result = await client.PATCH(path, requestOptions);
          break;
        case "DELETE":
          result = await client.DELETE(path, requestOptions);
          break;
        default:
          console.error(`Unsupported method: ${method}`);
          process.exitCode = 1;
          return;
      }
      if (result.error) {
        console.error(JSON.stringify(result.error, null, 2));
        process.exitCode = 1;
        return;
      }
      console.log(JSON.stringify(result.data ?? null, null, 2));
    } catch (error) {
      console.error(error.message ?? error);
      process.exitCode = 1;
    }
  });

program.parseAsync(process.argv);
