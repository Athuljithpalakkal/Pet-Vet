const express = require("express");
const petRouter = express.Router();
const pet = require("../models/petSchema");
const checkAuth = require("../middlewares/checkAuth");
const mongoose = require("mongoose");

// add pet booking

petRouter.post("/addpet", (req, res) => {
  const data = new pet({
    owner: req.body.owner,
    petname: req.body.petname,
    email: req.body.email,
    pet: req.body.pet,
    phone: req.body.phone,
    doctor_name: req.body.doctor_name,
  });
  data
    .save()
    .then((data) => {
      console.log("data saved");
      res
        .status(201)
        .json({ Message: "booking added successfully", data: data });
    })
    .catch((err) => console.log(err));
});

// display all pet bookings

petRouter.get("/allpets", (req, res) => {
  pet
    .find()
    .then((data) => {
      res.status(200).json({
        Success: true,
        Error: false,
        Message: "All bookings",
        data: data,
      });
    })
    .catch((error) => console.log(error));
});

// single pet booking

petRouter.get("/onepet/:id", (req, res) => {
  pet
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.status(200).json({ Message: "booking details", data: data });
    })
    .catch((err) => console.log(err));
});

// delete pet booking

petRouter.get("/dltpet/:id", checkAuth, (req, res) => {
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

// update booking

petRouter.post("/editpet/:id", checkAuth, (req, res) => {
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
      data.doctor_name = req.body.doctor_name;
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

// booking for each doctor

petRouter.get("/docbooking", checkAuth, (req, res) => {
  pet
    .aggregate([
      // {
      //   $lookup: {
      //     from: "petbookings",
      //     localField: "doc_name",
      //     foreignField: "doc_name",
      //     as: "results",
      //   },
      // },
      // {
      //   $unwind: "$results",
      // },
      { $match: { doctor_name: req.userData.doctor_name } },
      // {
      //   $group: {
      //     _id: "$_id",
      //     owner: { $first: "$results.owner" },
      //     petname: { $first: "$results.petname" },
      //     email: { $first: "$results.email" },
      //     pet: { $first: "$results.pet" },
      //     phone: { $first: "$results.phone" },
      //     doctor_name: { $first: "$results.doctor_name" },
      //   },
      // },
    ])
    .then((data) => {
      // console.log(data);
      res.json({ message: "user details", data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = petRouter;
