const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      res.write(data);
      res.write("Hello programmers!");
      res.write("How are you");
      res.end();
    });
  } else if (req.url === "/about") {
    res.write("This is about page");
    res.end();
  } else {
    res.write("Not found");
    res.end();
  }
});
// server.on('connection',()=>{
//     console.log('New Connection ...');
// })
server.listen(3000);
console.log("listening port on 3000");
