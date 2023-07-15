const fs = require("fs");

/*
//Bloking, synchronous way
console.log(fs.readFileSync("txt/input.txt", "utf-8"));

const text = `This is what we know about avocade: ${fs.readFileSync(
  "txt/input.txt",
  "utf-8"
)}.\n Created in ${Date.now()}.`;

console.log(text);
*/
fs.readFile("txt/start.txt", "utf-8", (err, file) => {
  fs.readFile(`txt/${file}.txt`, "utf-8", (err, text1) => {
    fs.readFile("txt/append.txt", "utf-8", (err, text2) => {
      fs.writeFile("txt/final.txt", `${text1} \n ${text2}`, "utf-8", (err) => {
        console.log("File has been written");
      });
    });
  });
});
