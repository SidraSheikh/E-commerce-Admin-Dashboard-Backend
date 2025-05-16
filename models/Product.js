const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  imageUrl: String,
  category: String
});

module.exports = model("Product", productSchema);
