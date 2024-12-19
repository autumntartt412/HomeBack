const mongoose = require('mongoose');
import Comment from "./models/Comment"; 

const commentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: false },
    email: { type: String, required: false },
    contact: {type: Number, required: false },
    rating: { type: Number, required: false },
    image: { type: String, required: false },
    text: { type: String, required: true },

});

let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;

// const commentsData = [
//     {
//     "name": "Autmn Tartt",
//     "title": "Project Manager",
//     "image": "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734540600/HOMES/agent_1_o8mvvl.jpg",
//     "rating": 5,
//     "text": "From our very first meeting, they grasped my vision and assisted me in finding the ideal property. Their meticulous attention to detail and dedication to client satisfaction are unparalleled."
// }
//     {
//         "name": "Liam Harper",
//         "title": "Lead Contractor",
//         "image": "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734544673/HOMES/pexels-joseph-fatola-2046744-19957521_cybv5u.jpg",
//         "rating": 4,
//         "text": "Their expertise and problem-solving skills have been invaluable. They went above and beyond to ensure our project was completed on time and with the highest quality."
//     }
//     {
//         "name": " Ethan Brooks",
//         "title": " Creative Director",
//         "image": "https://res.cloudinary.com/dmvfnusbi/image/upload/v1734544682/HOMES/pexels-mikhail-nilov-8717436_y96wof.jpg",
//         "rating": 5,
//         "text": " Their strategic thinking and ability to understand the market trends have helped us grow our business significantly. The team's dedication is impressive."
//     }