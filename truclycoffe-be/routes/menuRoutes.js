const express = require("express");
const FoodItem = require("../models/FoodItem");
const WaterItem = require("../models/WaterItem");

const router = express.Router();

router.get("/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const {
      page = 1,
      limit = 10,
      sort = "name",
      order = "asc",
      search = "",
    } = req.query;
    const sortOption = order === "desc" ? -1 : 1;
    let model;

    if (type === "food") {
      model = FoodItem;
    } else if (type === "water") {
      model = WaterItem;
    } else {
      return res.status(400).json({ message: "Loại món không hợp lệ" });
    }

    const query = search ? { name: new RegExp(search, "i") } : {};
    const items = await model
      .find(query)
      .sort({ [sort]: sortOption })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server" });
  }
});

router.post("/:type", async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const { type } = req.params;

    if (!name || !price || !image) {
      return res.status(400).json({ message: "Thiếu thông tin sản phẩm" });
    }

    let newItem;
    if (type === "food") {
      newItem = new FoodItem({ name, price, image, type });
    } else if (type === "water") {
      newItem = new WaterItem({ name, price, image, type });
    } else {
      return res.status(400).json({ message: "Loại món không hợp lệ" });
    }

    await newItem.save();
    res.json({ message: "Thêm món thành công", newItem });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm món" });
  }
});

module.exports = router;
