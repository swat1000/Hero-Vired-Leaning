

const fs = require("fs");

console.log("start");
fs.readFile("./nodejs.txt", "utf-8", (err, data)=>{
    console.log("we are inside callback function", data);
})

console.log("end")