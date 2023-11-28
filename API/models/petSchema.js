const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
    owner: {
        type: String,
        require: true,
      },
      petname: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
      },
      phone: {
        type: String,
        require: true,
      },pet: {
        type: String,
        require: true,
      },
      doctor_name: {
        type: String,
        require: true,
      },
});

module.exports = mongoose.model("petBookings",petSchema);