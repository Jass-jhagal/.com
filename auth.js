
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful", user });
});

// Signup (only for users)
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = await User.create({ name, email, password, role: "user" });
  res.json({ message: "User created", user });
});

module.exports = router;
