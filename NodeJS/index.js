const fs = require("fs");

console.log("start");

fs.readFile("./node.txt", "utf-8", (err, data)=>{
   
    console.log("we are inside callback function", data);
})
