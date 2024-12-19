import Comment from '../models/Comment'

const registerComment = async(req, res) => {
    const { name, title, email, contact, rating, image, text } = req.body;
}

export {registerComment} 