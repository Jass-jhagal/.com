
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  investments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Investment" }]
});

module.exports = mongoose.model("User", userSchema);
