const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  doctor_name: String,
  education:String,
  location: String,
  about: String,
  phone: Number,
  image:String,
});

var Doctor_data = mongoose.model("doctor_tb", doctorSchema);
module.exports = Doctor_data;
