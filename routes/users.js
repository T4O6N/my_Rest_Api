const express = require("express");
const router = express.Router();
const User = require("../models/user");
const user = require("../models/user");

// Getting all
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Creating one
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    age: req.body.age,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/", (req, res) => {});

// Deleting One
router.delete("/:id", (req, res) => {});

module.exports = router;
