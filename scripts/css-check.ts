import recursive from "recursive-readdir";
import { blue, bold } from "kolorist";

// TODO: Change to relative path
recursive("./lib", ["stories"], (error, files) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } else {
    files.forEach((file) => {
      if (file.endsWith(".css") && !file.endsWith(".module.css")) {
        let fileName = file?.split(".").slice(0, -1).join(".");

        throw new Error(
          // prettier-ignore
          `Only CSS modules are supported. Rename ${blue(bold(fileName + ".css"))} to ${blue(bold(fileName + ".module.css"))}`
        );
      }
    });
  }
});
