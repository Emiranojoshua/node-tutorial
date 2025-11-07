import express, { json } from "express";
import mongoose from "mongoose";
import Products from "./models/products.models.js";

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

mongoose
  .connect("mongodb://localhost:27017/emirano")
  .then(() => {
    app.listen(3000, () => {
      console.log("Server startedon port 3000");
    });
  })
  .catch((err) => console.log("MongoDB connection failed:", err.message));







// async function startServer() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/myappdb");
//     console.log("✅ MongoDB connected successfully");

//     app.listen(3000, () => {
//       console.log("🚀 Server started on port 3000");
//     });
//   } catch (err) {
//     console.log("❌ MongoDB connection failed:", err.message);
//   }
// }
