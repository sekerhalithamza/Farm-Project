/*
//Using file system package
const fs = require("fs");

//Bloking, synchronous way
console.log(fs.readFileSync("txt/input.txt", "utf-8"));

const text = `This is what we know about avocade: ${fs.readFileSync(
  "txt/input.txt",
  "utf-8"
)}.\n Created in ${Date.now()}.`;

console.log(text);

fs.readFile("txt/start.txt", "utf-8", (err, file) => {
  fs.readFile(`txt/${file}.txt`, "utf-8", (err, text1) => {
    fs.readFile("txt/append.txt", "utf-8", (err, text2) => {
      fs.writeFile("txt/final.txt", `${text1} \n ${text2}`, "utf-8", (err) => {
        console.log("File has been written");
      });
    });
  });
});

*/

//Using http module for server
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
