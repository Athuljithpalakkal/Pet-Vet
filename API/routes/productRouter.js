const express = require("express");
const productRouter = express.Router();
const product = require("../models/productSchema");
const checkAuth = require("../middlewares/checkAuth");
const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function(req,file,cb){
//       cb(null,"../front-end/pet-vet/public/imagesProduct/")
//   },
//   filename: function(req,file,cb){
//       cb(null,file.originalname)
//   },
// })

// const fileFilter = (req,file,cb) => {
// const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
// if (allowedFileTypes.includes(file.mimetype)){
//   cb(null,true);
// } else{
//   cb(null,false);
// }
// }
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "pet-vet",
  },
});

// const upload = multer({ storage, fileFilter });
const upload = multer({ storage: storage });

// add product

productRouter.post(
  "/addproduct",
  // checkAuth,
  upload.single("image"),
  (req, res) => {
    const data = new product({
      product_name: req.body.product_name,
      type: req.body.type,
      details: req.body.details,
      price: req.body.price,
      // image: req.file.filename,
      image: req.file ? req.file.path : null,
    });
    data
      .save()
      .then((data) => {
        console.log("data saved");
        res
          .status(201)
          .json({ Message: "product added successfully", data: data });
      })
      .catch((err) => console.log(err));
  }
);

// display all products

productRouter.get("/allproducts", (req, res) => {
  product
    .find()
    .then((data) => {
      res.status(200).json({
        Success: true,
        Error: false,
        Message: "All products",
        data: data,
      });
    })
    .catch((error) => console.log(error));
});

// single product

productRouter.get("/oneproduct/:id", (req, res) => {
  product
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.status(200).json({ Message: "product details", data: data });
    })
    .catch((err) => console.log(err));
});

// delete pet booking

productRouter.get("/dltproduct/:id", checkAuth, (req, res) => {
  product
    .deleteOne({
      _id: req.params.id,
    })
    .then(() => {
      res.status(200).json({ Message: "product deleted successfully" });
    })
    .catch((err) => console.log(err));
});

// update recipee

productRouter.post("/editproduct/:id", checkAuth, (req, res) => {
  product
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      data.product_name = req.body.product_name;
      data.type = req.body.type;
      data.details = req.body.details;
      data.price = req.body.price;
      data.image = req.file.filename;
      data
        .save()
        .then(() => {
          console.log("product updation successfull");
          res
            .status(201)
            .json({ Message: "Updated product successfully", data: data });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = productRouter;
