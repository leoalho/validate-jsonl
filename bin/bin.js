#!/usr/bin/env node
const {validateJSONL} = require("../src/validator")

validateJSONL(process.argv[2])