const mongoose = require('mongoose');
import Home from ".models/Home";

// {
    // title: "Mountainview Retreat",
    // price: "$2,50,000",
    // location: "California",
    // image: home2,
    // isAvailable: true,
//   },


// const homeSchema = new mongoose.Schema ({
//   title:{ type: String, required: true },
//   price: { type: String, required: false, },
//   location: { type: String, required: true },
//   image: { type: String, required: false },
// });

const homeSchema = new mongoose.Schema ({
  title:{ type: String, required: true },
  price: { type: Number, required: true, 
    set: function(value) {
        // Remove $, commas, decimal points and convert to a number
        if (typeof value === 'string') {
        }
        return parseFloat(value); // Converts to number(float)
      }
  },
  location: { type: String, required: true },
  image: { type: String, required: false },
isAvailable: { type: Boolean, default: true }, 
});

let Home = mongoose.model('Home', homeSchema);
module.exports = Home;
