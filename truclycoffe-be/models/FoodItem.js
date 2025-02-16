const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true, default: "food" },
});

module.exports = mongoose.model("FoodItem", FoodItemSchema);
