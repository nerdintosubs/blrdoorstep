import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import swagger2openapi from "swagger2openapi";

const require = createRequire(import.meta.url);

async function main() {
  const specPath = require.resolve("@netlify/open-api/dist/swagger.json");
  const spec = await fs.readFile(specPath, "utf-8");
  const swagger = JSON.parse(spec);
  const { openapi } = await swagger2openapi.convertObj(swagger, {
    patch: true,
    warnOnly: true,
  });
  const outPath = path.resolve("spec", "netlify-openapi.json");
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, JSON.stringify(openapi, null, 2));
  console.log(`Synced OpenAPI 3 spec to ${outPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
