import { readFile } from "fs/promises";
import Ajv from "ajv";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { schemaGoods } from "./models/schemaGoods.js";

const ajv = new Ajv();
const validateJSON = ajv.compile(schemaGoods);

const __dirname = dirname(fileURLToPath(import.meta.url));

async function readJSON(pathToFile) {
  try {
    const data = await readFile(pathToFile, "utf8");
    const parseData = JSON.parse(data);

    if (validateJSON(parseData)) {
      console.log("Validation OK");
      console.log(parseData);
    } else {
      console.log("Validation failed");

      console.log(validateJSON.errors);

      validateJSON.errors.forEach((err) => {
        console.log(`Path: ${err.instancePath || "/"} — ${err.message}`);
      });
    }
  } catch (err) {
    console.log(err);
  }
}

const filePath = path.join(__dirname, "goods.json");

readJSON(filePath);
