const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://VusalUmudov:dByhahmwafYnwzbs@cluster0.ojjymlf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connect to database"))
  .catch(() => console.error(err));
const productSchema = mongoose.Schema({
  img: String,
  name: String,
  detail: String,
});

const productModel = mongoose.model("product", productSchema);

app.get("/product", (req, res) => {
  flowerModel.find(null, (err, data) => {
    if (err) return res.status(500).send({ err });

    res.send(data);
  });
});

app.post("/product", (req, res) => {
  let newProduct = new productModel({
    ...req.body,
  });
  newProduct.save();
  res.status(200).send({ message: "create product", newProduct });
});

app.get("/product/:id", (req, res) => {
    productModel.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.status(500).send({ err });

    res.send(data);
  });
});

app.delete("/product/:id", (req, res) => {
    productModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
    if (err) return res.status(500).send({ err });
    res.send(data);
  });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})