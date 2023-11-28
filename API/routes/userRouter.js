const express = require("express");
const userRouter = express.Router();
const mongoose = require('mongoose')
// const userData = require("../models/registerSchema");
const userSchema = require("../models/loginSchema");
const checkAuth = require("../middlewares/checkAuth");

// ***** user profile *****

userRouter.get("/userprofile",checkAuth, (req, res) => {
  userSchema
    .aggregate([
      {
        $lookup: {
          from: "register_tbs",
          localField: "_id",
          foreignField: "login_id",
          as: "results",
        },
      },
      {
        $unwind: "$results",
      },
      {$match:{_id: new mongoose.Types.ObjectId(req.userData.userId)}},
      {
        $group: {
          _id: "$_id",
          name: { $first: "$results.name" },
          address: { $first: "$results.address" },
          phone: { $first: "$results.phone" },
          username: { $first: "$username" },
          password: { $first: "$password" },
        },
      },
    ])
    .then((data) => {
      console.log(data);
      res.json({ message: "user details", data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

// add pet booking

// userRouter.post("/addpet",checkAuth, (req, res) => {
//     const data = new pet({
//       owner: req.body.owner,
//       petname: req.body.petname,
//       email: req.body.email,
//       pet: req.body.pet,
//       phone: req.body.phone,
//       doctor_name: req.body.doctor_name,
//     });
//     data
//       .save()
//       .then((data) => {
//         console.log("data saved");
//         res
//           .status(201)
//           .json({ Message: "booking added successfully", data: data });
//       })
//       .catch((err) => console.log(err));
//   });

// ****** display all users ******

userRouter.get("/allusers", (req, res) => {
  user
    .find()
    .then((data) => {
      res
        .status(200)
        .json({
          Success: true,
          Error: false,
          Message: "All bookings",
          data: data,
        });
    })
    .catch((error) => console.log(error));
});

// ***** single user *****

userRouter.get("/oneuser/:id", (req, res) => {
  user
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.status(200).json({ Message: "booking details", data: data });
    })
    .catch((err) => console.log(err));
});

// ***** delete user *****

userRouter.get("/dltuser/:id", checkAuth, (req, res) => {
  pet
    .deleteOne({
      _id: req.params.id,
    })
    .then(() => {
      console.log("booking deleted");
      res.status(200).json({ Message: "booking deleted successfully" });
    })
    .catch((err) => console.log(err));
});

// ***** update user *****

userRouter.post("/editpet/:id", checkAuth, (req, res) => {
  pet
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      data.owner = req.body.owner;
      data.petname = req.body.petname;
      data.email = req.body.email;
      data.pet = req.body.pet;
      data.phone = req.body.phone;
      data
        .save()
        .then(() => {
          console.log("updation successfull");
          res
            .status(201)
            .json({ Message: "Updated booking successfully", data: data });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = userRouter;
