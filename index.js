const express = require("express");

const app = express();

const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});

//add the router
app.use('/', router);
// let router = require('./routes');

// // serve your css as static
// app.use(express.static(__dirname));

// app.get("/", (req, res) => {
  
//   res.sendFile(__dirname + "/index.html");
// });
// const myPortfolio = function (req, res) {
//     fs.readFile(__dirname + "/index.html")
//         .then(contents => {
//             res.setHeader("Content-Type", "text/html");
//             res.writeHead(200);
//             res.end(contents);
//         })
//    .catch(err => {
//             res.writeHead(500);
//             res.end(err);
//             return;
//         });
// };

app.listen(3000, () => {
  console.log('server started');
});