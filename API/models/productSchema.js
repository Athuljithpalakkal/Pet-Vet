const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name:String,
    type:String,
    details:String,
    price:Number,
    image:String,
});

var Product_data = mongoose.model('product_tb',ProductSchema);
module.exports = Product_data;