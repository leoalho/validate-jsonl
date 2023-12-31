# Validate-jsonl
Validate jsonl is a simple tool for validating JSON lines files.\
The validator logs the amount of faulty lines and their associated error codes.\
For more information on the json lines format please see https://jsonlines.org/.

## Using the validator

### Installing
Install the validator by running `npm i validate-jsonl` or `yarn add validate-jsonl`

### Running from the command line
Run the validator with the command `npx validate-jsonl <filename>` or `yarn validate-jsonl <filename>`

### Running in code
#### ES
```
import {validateJSONL}from "validate-jsonl"
validateJSON("filepath")
```
The library comes with type definitions, so it also works with typescript
#### CommonJS
```
const {validateJSONL} = require("validate-jsonl")
validateJSONL("filepath")
```