const express = require("express");
const app = express();

const course = [{ course: "node"}, {course: "react"}];

app.get("/course", (req, res)=>{
    res.send("course");
})

app.get("/course/:name", function(req, res){
    const couse={
        
    }
})