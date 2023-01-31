#!/usr/bin/env node
// @ts-check

import { execSync } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import {
  blue,
  bold,
  lightMagenta,
  magenta,
  underline,
  white,
  yellow,
} from "kolorist";

// prettier-ignore
let PBandJ = `
${yellow(" ___ ") + blue("___  ") + lightMagenta("             _  ") + magenta("  _  ") }
${yellow("| _ \\") + blue(" _ )")+ lightMagenta(" __ _ _ _  __| |")  + magenta("_ | |") }
${yellow("|  _/") + blue(" _ \\")+ lightMagenta("/ _` | ' \\/ _` ")  + magenta("| || |") }
${yellow("|_| ") + blue("|___/") + lightMagenta("\\__,_|_||_\\__,_|") + magenta("\\__/ ") }
`

console.log(PBandJ);

console.log(
  bold(
    underline(
      "Welcome to " +
        yellow("P") +
        blue("B") +
        lightMagenta("and") +
        magenta("J") +
        "\n"
    )
  )
);

await inquirer
  .prompt([
    {
      type: "input",
      name: "libraryName",
      message: "What do you want to call your component library?",
      validate(input, answers) {
        const isValid = input.match(
          "^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$"
        );

        if (isValid) {
          return true;
        } else {
          return "Please enter a valid npm package name";
        }
      },
    },
  ])
  .then((answers) => {
    // Clone the repo to a folder called the library name
    execSync(
      `git clone https://github.com/moishinetzer/PBandJ.git "${answers.libraryName}"`,
      {
        stdio: "ignore",
      }
    );

    // Change directory to the new folder
    process.chdir(`./${answers.libraryName}`);

    const packageJsonPath = "./package.json";

    /** @type { import("type-fest").PackageJson } */
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.name = answers.libraryName;
    packageJson.version = "0.0.1";

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  });

await inquirer
  .prompt([
    {
      type: "confirm",
      name: "installDependencies",
      message: "Would you like us to install dependencies for you?",
      default: false,
    },
  ])
  .then((answers) => {
    if (!answers.installDependencies) {
      console.log(
        white(
          "\n" +
            "You can install dependencies by running " +
            bold("npm install") +
            " in the project directory"
        )
      );
      return;
    }

    execSync("npm install", {
      stdio: "inherit",
    });
  });

console.log(
  bold(
    white(
      "\n" + "You can now start developing your component library! Enjoy! 🥜💜"
    )
  )
);
