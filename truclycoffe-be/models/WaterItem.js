const mongoose = require("mongoose");

const WaterItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true, default: "water" },
});

module.exports = mongoose.model("WaterItem", WaterItemSchema);
