const mongoose = require('mongoose');
import User from "./models/User.js"; 

const userSchema = new mongoose.Schema ({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String,  required: true },
      contactNumber: { type: Number, required: false, validate: {
        validator: function(value) {
          // Check to see if contact number is at least 9 digits long
          return value && value.replace(/\D/g, '').length >= 9; // Remove non-digit characters and check length
        },
        message: 'Contact number must be at least 9 digits long.'
      }
    }, 
  });
     


const User = mongoose.model('User', userSchema);
module.exports = User;