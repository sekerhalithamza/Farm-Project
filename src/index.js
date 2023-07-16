/*

// Using file system package
const fs = require("fs");

// Bloking, synchronous way
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

/*

// Using http module for server
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});

*/

/*

// Routing pages for urls
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === "/" || path === "/overview") res.end("The overview");
  else if (path === "/product") res.end("The product");
  else
    res.writeHead("404", {
      "Content-type": "text:html",
      "my-own-header": "hello-world",
    }),
      res.end("<h1>Page not found</h1>");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening from server");
});

*/

// A very simple API
const http = require("http");
const url = require("url");
const fs = require("fs");

const overviewSite = fs.readFileSync(
  "templates/overview.html",
  "utf-8",
  (err, data) => {
    return data;
  }
);

const apiData = fs.readFileSync("dev-data/data.json", "utf-8", (err, data) => {
  data = JSON.parse(data);
  return data;
});

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === "/overview" || path === "/") {
    res.writeHead("200 ", {
      "content-type": "text/html",
    });
    res.end(overviewSite);
  } else if (path === "/product") res.end("This is the product");
  else if (path === "/api") {
    res.writeHead("200", {
      "Content-type": "application/json",
    });
    res.end(apiData);
  } else
    res.writeHead("404", {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    }),
      res.end("<h1>Page not found</h1>");
});

server.listen(8000, "127.0.0.1");
