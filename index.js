const fs = require("fs");
const path = require("path");
const http = require("http");
const port = 5000;
const express = require("express");
const app = express();
// Server creation using https

// const data = require("./data");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(5000);

// crud operation using fs filesystem

// const pathDir = path.join(__dirname + "/crudfs");
// writing file and creating at specific path
// fs.writeFileSync(`${pathDir}/one.text`, "Wonderfull man");

// now reading text from that file
// fs.readFile(`${pathDir}/apple.text`, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// now i want to append text to that file text
// fs.appendFile(`${pathDir}/apple.text`, " I am khalid mansoor", (err) => {
//   if (!err) console.log("File updated");
// });

//now i want to delete the file
// fs.unlink(`${pathDir}/one.text`, (err) => {
//   if (!err) console.log("File deleted successfully");
// });

// reading multiple files data using single function in specific directory

// fs.readdir(`${pathDir}`, (err, files) => {
//   if (err) throw err;

//   for (const file of files) {
//     fs.readFile(`${pathDir}/${file}`, "utf8", (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//   }
// });

// what if i need only images file from specific directory
// const files = fs
//   .readdirSync("F:/images")
//   .filter(
//     (file) =>
//       file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png")
//   );
// files.forEach((file) => {
//   console.log(file);
// });

//what if i want to count the images number
// fs.readdir("F:/images", (err, files) => {
//   if (err) throw err;

//   const jpegFiles = files.filter(
//     (file) => file.endsWith(".jpg") || file.endsWith(".jpeg")
//   );
//   console.log(`Number of JPEG files: ${jpegFiles.length}`);
// });

// Now its the time to get static html pages in node js

const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/services", (_, res) => {
  res.sendFile(`${publicPath}/Services.html`);
});
app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/404.html`);
});
app.listen(port, (err) => {
  console.log(`app is listening on port ${port}`);
});
