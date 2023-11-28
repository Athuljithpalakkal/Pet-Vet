const express = require("express");
const DocRegisterRouter = express.Router();
const docRegisterDB = require("../models/doctorSchema");
const bcrypt = require("bcryptjs");
const loginDB = require("../models/loginSchema");
const multer = require("multer");
const checkAuth = require("../middlewares/checkAuth");

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


DocRegisterRouter.post("/",upload.single('image'), async (req, res) => {
    try {
      const oldUser = await loginDB.findOne({ username: req.body.username });
      if (oldUser) {
        return res
          .status(400)
          .json({ success: false, error: true, message: "Doctor already exists" });
      }
      const oldPhone = await docRegisterDB.findOne({ phone: req.body.phone });
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
        doctor_name: req.body.doctor_name,
        role: 3,
      };
  
      const result = await loginDB(log).save();
      let reg = {
        login_id: result._id,
        doctor_name: req.body.doctor_name,
        location: req.body.location,
        about: req.body.about,
        phone: req.body.phone,
        education: req.body.education,
        image: req.file.filename,
      };
      const result2 = await docRegisterDB(reg).save();
      if (result2) {
        res.status(201).json({
          success: false,
          error: true,
          message: "Doctor registration completed",
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

  module.exports = DocRegisterRouter