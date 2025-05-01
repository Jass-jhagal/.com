
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Scheme = require("../models/Scheme");
const Setting = require("../models/Setting");

router.get("/users", async (req, res) => {
  const users = await User.find().populate("investments");
  res.json(users);
});

router.post("/scheme", async (req, res) => {
  const scheme = await Scheme.create(req.body);
  res.json(scheme);
});

router.get("/schemes", async (req, res) => {
  const schemes = await Scheme.find();
  res.json(schemes);
});

router.post("/upi", async (req, res) => {
  await Setting.deleteMany();
  const setting = await Setting.create({ upiId: req.body.upiId });
  res.json(setting);
});

router.get("/upi", async (req, res) => {
  const setting = await Setting.findOne();
  res.json(setting);
});

module.exports = router;
