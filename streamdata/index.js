// const fs = require('fs');
// // const { chunk } = require('lodash');
// const ourReadstrem = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourWritestream = fs.createWriteStream(`${__dirname}/output.txt`);
// // ourReadstrem.on('data', (chunk) => {
// //     // console.log(chunk.toString());
// //     ourWritestream.write(chunk);
// // });
// ourReadstrem.pipe(ourWritestream);
// console.log('Hello');

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // fs.readFile("./index.html", (err, data) => {
    //     res.write(data);
    //     res.write("Hello programmers!");
    //     res.write("How are you");
    //     res.end();
    // });
    //
    res.write('<html><head><title>Form</title></head>');
    res.write('<body><form method = "Post" action="/process"><input name="message"/></form></body>');
    res.end();
  } else if (req.url === "/process" && req.method==="POST") {
    // console.log(req.data);
    const body =[];
    req.on('data',(chunk)=>{
        // console.log(chunk.toString());
        body.push(chunk);
        const parseBody=Buffer.concat(body).toString();
        console.log(parseBody);
    })
    req.on('end',()=>{
        console.log('Stream finished');
    })
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



// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//     const ourReadstrem = fs.createReadStream(`${__dirname}/bigdata.txt`);
//     ourReadstrem.pipe(res);

// });
// // server.on('connection',()=>{
// //     console.log('New Connection ...');
// // })
// server.listen(3000);
//  console.log("listening port on 3000");
