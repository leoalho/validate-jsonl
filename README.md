# Validate-jsonl
Validate jsonl is a simple command line tool for validating JSON lines files.\
For more information on the json lines format please see https://jsonlines.org/.
## Using the validator
1. Install the validator by running `npm i validate-jsonl` or `yarn add validate-jsonl`
2. Run the validator with the command `npx validate-jsonl <filename>` or `yarn validate-jsonl <filename>`
3. The validator will log the amount of faulty lines and all lines with incorrect JSON elements and their associated error codes. 