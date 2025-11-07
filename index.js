import express, { json } from "express";
import mongoose from "mongoose";
import Products from "./models/products.models.js";
import { dump } from './utilities/functions.js';


const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("this is the resonse");
});

app.post("/api/products", async (req, res) => {
  const productData = await Products.create(req.body);
  res.status(200).json(productData)
});

app.get("/api/products", async (req, res) => {
  const products = await Products.find({})
  res.status(200).json(products)
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

