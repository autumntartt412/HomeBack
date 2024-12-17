const mongoose = require('mongoose');
import Comment from "./models/Comment";  


const commentSchema = new mongoose.Schema({
    comment: { type: String, required: false },
});


let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;