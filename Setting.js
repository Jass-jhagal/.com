
const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  upiId: String
});

module.exports = mongoose.model("Setting", settingSchema);
