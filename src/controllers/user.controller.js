const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.post("/register", async (req, res) => {
  try {
    const user = User.create(req.body);

    return res.status(201).send({ user: user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = User.findOne({
      email: req.body.email,
      password: req.body.password,
    })
      .lean()
      .exec();

    return res.status(201).send({ user: user });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
