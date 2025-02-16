const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const menuRoutes = require("./routes/menuRoutes");
// const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/menu", menuRoutes);
// app.use("/api/account", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
