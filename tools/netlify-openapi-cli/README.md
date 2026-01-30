# Netlify OpenAPI CLI

This is a lightweight CLI wrapper that uses the Netlify OpenAPI spec to call API operations by `operationId`.

## Prerequisites
- Node.js + npm
- A Netlify personal access token set as `NETLIFY_AUTH_TOKEN`

## Setup
```bash
cd tools/netlify-openapi-cli
npm install
```

## Codegen (typed client)
This repo pins the Netlify Swagger spec from `@netlify/open-api`, converts it to OpenAPI 3,
and generates typed definitions:
```bash
# sync spec from the npm package
npm run spec:sync

# generate types into ./generated
npm run generate
```

## List available operations
```bash
node cli.mjs operations
```

## Call an operation
```bash
# Example: replace with a real operationId from the list
node cli.mjs call listSites
```

## Pass parameters and a JSON body
```bash
node cli.mjs call updateSite \
  --param site_id=YOUR_SITE_ID \
  --body '{"name":"new-site-name"}'
```

## Typed CLI (generated client)
```bash
# after running npm run generate
npm run cli:typed -- operations

# call an endpoint with method + path
npm run cli:typed -- call GET /sites
```

## Spec source
By default, the CLI pulls the published spec from `https://open-api.netlify.com/swagger.json`.
Use `--spec-url` to point at a different URL, or `--spec-module @netlify/open-api` to load the
spec from the npm package.

## Token
Set the token in your shell before running commands:
```powershell
$env:NETLIFY_AUTH_TOKEN="YOUR_TOKEN"
```
