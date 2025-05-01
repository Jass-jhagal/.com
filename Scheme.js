
const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  minAmount: Number,
  interestRate: Number,
  durationMonths: Number
});

module.exports = mongoose.model("Scheme", schemeSchema);
