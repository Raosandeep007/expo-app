const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "components"); // Adjust the path to your project directory

const addReactImport = (filePath) => {
  const data = fs.readFileSync(filePath, "utf8");
  if (!data.includes('import React from "react";')) {
    const updatedData = `import React from "react";\n${data}`;
    fs.writeFileSync(filePath, updatedData, "utf8");
    console.log(`Updated: ${filePath}`);
  }
};

const processDirectory = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith(".jsx") || filePath.endsWith(".tsx")) {
      addReactImport(filePath);
    }
  });
};

processDirectory(directoryPath);
