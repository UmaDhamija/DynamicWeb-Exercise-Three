const express = require('express'); //everything in javascript is an object but this is also a package.

const app = express(); //object
const port = 4000; //number

app.get('/', (req, res) => res.send('Hello World!'));
//.get tells you that it's a child of the previous command. a command of app so,
// app:{
//   get: function(path, ()=>{})
// }
// req: request
// res: response


app.listen(port, ()=> console.log("Hello World Running!"));
//function inside the express object. Two arguments: port (4000) anda  callback function

// not a website, not an html file, just running the server response at the most basic level
//making a request via browser to express server, which is responding with what we need
