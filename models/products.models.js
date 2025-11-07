import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      "Please enter product name"]
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    default: true,
    default: 0
  },
  image: {
    type: String,
    required: false
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
});



const Products = mongoose.model("Product", ProductsSchema);


export default Products;
