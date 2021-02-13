const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const orderSchema = new Schema({
  order_id: { type: String, required: true },
  ordered_date: { type: String, required: true },
  delivery_date: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  products: { type: String, required: true },
  message: String,
});

module.exports = Order = mongoose.model("Order", orderSchema);
