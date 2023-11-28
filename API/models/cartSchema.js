const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    product_name:String,
    username:String,
    price:Number,
    image:String,
    quantity:{
        type:Number,
        default:1
    },
    subtotal:{
        type:Number,
        default:() => this.price
    }
});

var cart_data = mongoose.model('cart_tb',cartSchema);
module.exports = cart_data;