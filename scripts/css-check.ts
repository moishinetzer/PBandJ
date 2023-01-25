import recursive from "recursive-readdir";
import chalk from "chalk";

// TODO: Change to relative path
recursive("./lib", ["stories"], (error, files) => {
  if (error) {
    console.error(error);
  } else {
    files.forEach((file) => {
      if (file.endsWith(".css") && !file.endsWith(".module.css")) {
        let fileName = file?.split(".").slice(0, -1).join(".");

        throw new Error(
          // prettier-ignore
          `Only CSS modules are supported. Rename ${chalk.blue(chalk.bold(fileName + ".css"))} to ${chalk.blue(chalk.bold(fileName + ".module.css"))}`
        );
      }
    });
  }
});
