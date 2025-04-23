import fs from "fs";
import Joi from "joi";
import { parse } from "jsonc-parser";
import path from "path";

const IN_DIR = path.join(__dirname, "../projects");
const OUT_PATH = path.join(__dirname, "projects.json");

/**
 *  The data schema for an "Ecosystem Project".
 */
const projectSchema = Joi.object({
  date: Joi.string().min(1).required(),
  name: Joi.string().min(1).required(),
  brief: Joi.string().min(1).required(),
  img: Joi.string().min(1).required(),
  website: Joi.string().min(1).required(),
  x: Joi.string().optional(),
  github: Joi.string().optional(),
  telegram: Joi.string().optional(),
  discord: Joi.string().optional(),
  hidden: Joi.boolean().optional().default(false),
});

console.log();
const projectList = [];
fs.readdirSync(IN_DIR).forEach((file, idx) => {
  if (file.endsWith(".json") || file.endsWith(".jsonc")) {
    try {
      // Iterate each project file and load the content to be checked.
      const filePath = path.join(IN_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      // Step 1: Convert JSONC data into JSON.
      const parsedData = parse(fileContent);

      // Step 2: Validate the JSON against our Joi schema.
      const validated = projectSchema.validate(parsedData, {
        stripUnknown: true,
      });
      if (validated.error) throw validated.error;
      else if (validated.warning) throw validated.warning;

      // Skip projects that are marked 'hidden'.
      if (validated.value.hidden) {
        console.log(`Skipping hidden project: ${validated.value.name}`);
        return;
      }

      // Step 3: The json has been validated. Transform the `img` path into a complete url.
      validated.value.img = path.join(
        `https://raw.githubusercontent.com/switchboard-xyz/ecosystem/main`,
        validated.value.img
      );

      console.log(`Successfully validated: ${file}`);
      projectList.push(validated.value);
    } catch (error) {
      console.error(`Error parsing ${file}:`, error);
    }
  } else {
    console.error(`File ${idx} is not of type .json or .jsonc: ${file}`);
  }
});

fs.rmSync(OUT_PATH, { force: true });
fs.writeFileSync(OUT_PATH, JSON.stringify(projectList, null, 2));
console.log();
console.log("---");
console.log("Consolidated JSON file created successfully.");
