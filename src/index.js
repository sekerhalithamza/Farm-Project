const fs = require("fs");

console.log(fs.readFileSync("txt/input.txt", "utf-8"));

const text = `This is what we know about avocade: ${fs.readFileSync(
  "txt/input.txt",
  "utf-8"
)}.\n Created in ${Date.now()}.`;

console.log(text);

fs.writeFileSync("txt/output.txt", text);
