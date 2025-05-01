
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));

mongoose.connect("mongodb://127.0.0.1:27017/moneyhub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

app.listen(3000, () => console.log("Server started on port 3000"));


const User = require("./models/User");

// Create default admin if not exists
async function createDefaultAdmin() {
  const exists = await User.findOne({ email: "sabby@moneyhub.com" });
  if (!exists) {
    await User.create({
      name: "Sabby",
      email: "sabby@moneyhub.com",
      password: "Sabby123",
      role: "admin"
    });
    console.log("Default admin created: sabby@moneyhub.com / Sabby123");
  }
}
createDefaultAdmin();
