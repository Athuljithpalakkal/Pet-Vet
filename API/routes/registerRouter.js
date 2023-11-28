const express = require("express");
const RegisterRouter = express.Router();
const registerDB = require("../models/registerSchema");
const bcrypt = require("bcryptjs");
const loginDB = require("../models/loginSchema");

RegisterRouter.post("/", async (req, res) => {
  try {
    const oldUser = await loginDB.findOne({ username: req.body.username });
    if (oldUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "user already exists" });
    }
    const oldPhone = await registerDB.findOne({ phone: req.body.phone });
    if (oldPhone) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Phone number already exists",
      });
    }
    console.log(req.body.password);
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    let log = {
      username: req.body.username,
      password: hashedPassword,
      role: 2,
    };

    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
    };
    const result2 = await registerDB(reg).save();
    if (result2) {
      res.status(201).json({
        success: false,
        error: true,
        message: "registration completed",
        details: result2,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: true, message: "Something went wrong" });
    console.log(error);
  }
});

module.exports = RegisterRouter;
