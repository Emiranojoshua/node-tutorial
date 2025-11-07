import express, { json } from "express";
import mongoose from "mongoose";
import Products,  { objectId } from "./models/products.models.js";
import { dump } from './utilities/functions.js';


console.log(objectId);

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("this is the resonse");
});

app.post("/api/products", async (req, res) => {

  try {
    const productData = await Products.create(req.body);
    res.status(200).json(productData)
  } catch (error) {
    dump(error.message)
  }
});

app.get("/api/products", async (req, res) => {

  try {
    const products = await Products.find({})
    res.status(200).json(products)
  } catch (error) {
    dump(error.message)
  }
})

app.get("/api/products/:id", async (req, res) => {

  try {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ message: "Invalid product ID" });
    //   dump("Invalid ID")
    // }
    const product = await Products.findById(id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(id)
    dump(id)
  } catch (error) {
    console.log(error.message)
    res.sendStatus(500);  
  }
})

async function startServer() {
  try {
    await mongoose.connect("mongodb://localhost:27017/emirano")
    dump("Database connected successfully")

    app.listen(3000, () => {
      dump("server started")
    })
  } catch (err) {
    dump(err.message)
  }
}

startServer();

