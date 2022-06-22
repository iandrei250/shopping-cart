const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  price: {
    type: Number,
    required: true,
    max: 1024,
    min: 6,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);
