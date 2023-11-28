const express = require("express");
const docRouter = express.Router();
const doc = require("../models/doctorSchema");
const checkAuth = require("../middlewares/checkAuth");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"../front-end/pet-vet/public/images/")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    },
})

const fileFilter = (req,file,cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)){
    cb(null,true);
  } else{
    cb(null,false);
  }
}

const upload = multer({storage,fileFilter})



// add doctor

docRouter.post("/adddoc",checkAuth,upload.single('image'), (req, res) => {
    const data = new doc({
      doctor_name: req.body.doctor_name,
      education: req.body.education,
    location: req.body.location,
    about: req.body.about,
    phone: req.body.phone,
    image: req.file.filename,
    });
    data
      .save()
      .then((data) => {
        console.log("data saved");
        res
          .status(201)
          .json({ Message: "doctor added successfully", data: data });
      })
      .catch((err) => console.log(err));
  });
  
  // display all doctors
  
  docRouter.get("/alldocs", (req, res) => {
    doc.find()
      .then((data) => {
        res
          .status(200)
          .json({ Success: true, Error: false, Message: "All doctors", data: data });
      })
      .catch((error) => console.log(error));
  });
  
  // single doctor
  
  docRouter.get("/onedoc/:id", (req, res) => {
    doc.findOne({
      _id: req.params.id,
    })
      .then((data) => {
        res.status(200).json({ Message: "doctor details", data: data });
      })
      .catch((err) => console.log(err));
  });
  
  // delete pet booking
  
  docRouter.delete("/dltdoc/:id",checkAuth, (req, res) => {
    doc.deleteOne({
      _id: req.params.id,
    })
      .then(() => {
        res.status(200).json({ Message: "doctor deleted successfully" });
      })
      .catch((err) => console.log(err));
  });
  
  // update recipee
  
  docRouter.post("/editdoc/:id",checkAuth, (req, res) => {
    doc.findOne({
      _id: req.params.id,
    })
      .then((data) => {
        data.doctor_name = req.body.doctor_name;
        data.education = req.body.education;
        data.location = req.body.location;
        data.about = req.body.about;
        data.phone = req.body.phone;
        data.image = req.file.filename;
        data
          .save()
          .then(() => {
            console.log("doctor updation successfull");
            res
              .status(201)
              .json({ Message: "Updated doctor successfully", data: data });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  })
  
  module.exports = docRouter;
  