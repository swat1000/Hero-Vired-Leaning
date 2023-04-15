const product = require("./products");
const express = require("express");

//Getallproducts, getproductbyid, getproductbyname,addanewproduct
const app = express();

//Getallproducts
app.get("./breakout room/products", (req, res) => {
  res.send(product);
});

//getproductbyid
app.get("./breakout room/products/:id", (req, res) => {
  product.find((ele) => {
    if (ele.id.toString() === req.params.id) {
      res.send(ele);
    }
  });
});

//getproductbyname
app.get("./breakout room/products/:name", (req, res) => {
  product.find((ele) => {
    if (ele.title === req.params.name) {
      res.send(ele);
    }
  });
});

app.listen(4000, () => {
  console.log("My server started");
});
