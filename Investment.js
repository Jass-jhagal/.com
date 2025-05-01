
const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  schemeId: { type: mongoose.Schema.Types.ObjectId, ref: "Scheme" },
  amount: Number,
  status: { type: String, enum: ["pending", "confirmed"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Investment", investmentSchema);
