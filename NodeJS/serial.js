const fs = require("fs");

console.log("start");
fs.readFile("./node1.txt", "utf-8", (err, data)=>{
    console.log("we are inside callback function", data);
    fs.readFile("./node2.txt", "utf-8", (err, data)=>{
        console.log("we are inside callback function", data);
        fs.readFile("./node3.txt", "utf-8", (err, data)=>{
            console.log("we are inside callback function", data);
        })
    })
})

console.log("end")