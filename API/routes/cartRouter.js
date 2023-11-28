const express = require("express");
const cartRouter = express.Router();
const cartSchema = require("../models/cartSchema");
const mongoose = require("mongoose");
const checkAuth = require("../middlewares/checkAuth");


cartRouter.post("/add", (req, res) => {
  const data = new cartSchema({
    product_name: req.body.product_name,
    username: req.body.username,
    image: req.body.image,
    price: req.body.price,
    quantity: req.body.qunatity,
  });
  data.save().then((data) => {
    console.log("data added!");
    res.status(201).json({ message: "item added successfully", data: data });
  });
});

cartRouter.get("/view", checkAuth, (req, res) => {
  cartSchema
    .aggregate([{ $match: { username: req.userData.username } }])
    .then((data) => {
      console.log("All items");
      res.status(200).json({ message: "All items in cart", data: data });
    })
    .catch((error) => console.error(error));
});

cartRouter.get("/delete/:id", (req, res) => {
  cartSchema
    .deleteOne({
      _id: req.params.id,
    })
    .then(() => {
      console.log("item deleted");
      res.status(200).json({ message: "item deleted from cart", data: data });
    })
    .catch((error) => console.error(error));
});

cartRouter.get("/deleteall", (req, res) => {
  cartSchema
    .deleteMany()
    .then(() => {
      console.log("all items deleted");
      res.status(200).json({ message: "all items deleted" });
    })
    .catch((err) => console.error(err));
});

cartRouter.post("/counterup/:id", (req, res) => {
  cartSchema.findOne({
    _id:req.params.id,
  })
  .then((data) => {
    const quantity = data.quantity
    console.log(quantity);
    const updatedQuantity = quantity + 1
    console.log(updatedQuantity);
    cartSchema.updateOne(
      { _id: req.params.id},
      {$set: {quantity:updatedQuantity}}
    )
    
    .then(() =>{
      
      res.status(200).json({ message: "counter incremented" });
    })
    .catch((err)=> console.log(err))
    // console.log("counter incremented");
  })
  .catch((err) => console.error(err));
});

cartRouter.post("/counterdown/:id",(req,res) => {
   cartSchema.findOne({
    _id:req.params.id
   })
   .then((data) => {
    const quantity = data.quantity
    console.log(quantity);
    const updatedQuantity = quantity - 1
    console.log(updatedQuantity);
    cartSchema.updateOne(
      { _id: req.params.id},
      {$set: {quantity:updatedQuantity}}
    )
    
    .then(() =>{
      
      res.status(200).json({ message: "counter decremented" });
    })
    .catch((err)=> console.log(err))
    // console.log("counter decremented");
   })
   .catch((err)=> console.log(err))
})

module.exports = cartRouter;
