import express from 'express';
import { db } from "../db/conn.mjs";
import { ObjectId } from "mongodb";
const router = express.Router();

http://localhost:5000/comment

// GET a comment
router.route("/")
  .get(async (req, res, next) => {
    try {
      const collection = await db.collection("comments");
      const result = await collection.find({}).toArray();
      console.log(result);
      res.status(200).send(result);
    } catch (error) {
      console.error("Error retrieving comments:", error);
      res.status(500).send("Error retrieving comment.");
    }
  })

  // POST a comment
  .post('/saveComment', async (req, res) => {
    const {name, title, email, contact, rating, text } = req.body;
    console.log(name);
    try {
      const collection = await db.collection("comments");
      const newComment = {
        name: req.body.name,
        title: req.body.title,
        email: req.body.email,
        contact: req.body.contact,
        rating: req.body.rating,
        image: req.body.image,
        text: req.body.text
      };
  
      const result = await collection.insertOne(newComment);
  
  
      res.status(201).json(result);
    } catch (error) {

      console.error("Error inserting comment:", error);
      res.status(500).send("Error inserting comment.");
    }
  });


// http://localhost:5000/comment/676309663ea0523722337970

// GET a comment by its ID.
router
  .route("/:id")
  .get(async (req, res, next) => {
    let collection = await db.collection("comments")
    let query = { _id: new ObjectId(req.params.id) }

    let result = await collection.findOne(query)

    console.log(result);
    if (!result) res.send("Comment not found.").status(404);
    else res.send(result).status(200);
  })


 // UPDATE a comment by its ID
 .put(async (req, res) => {
  try {
    const collection = await db.collection('comments');
  let filter = { _id: new ObjectId(req.params.id) }
  let updatedComment = { 
    $set: { 
        name: req.body.name,
        title: req.body.title,
        email: req.body.email,
        contact: req.body.contact,
        rating: req.body.rating,
        image: req.body.image,
        text: req.body.text

    },
};
let result = await collection.updateOne(filter, updatedComment);
console.log(result);

if (!result.modifiedCount) {
  return res.status(404).send("Comment not found.");
}
return res.status(200).send(result);
} catch (error) {
console.error("Error updating comment:", error);
return res.status(500).send("An error occurred while updating the comment.");
}
})

  // DELETE a comment by its ID

  .delete(async (req, res) => {
    try {
      let collection = await db.collection("comments");
      let query = { _id: new ObjectId(req.params.id) };
    
      let result = await collection.deleteOne(query);
    
      if (!result.deletedCount) {
        return res.status(404).send("Comment not found");
      }
      return res.status(200).send(result);
    } catch (error) {
      console.error("Error deleting comment:", error);
      return res.status(500).send("An error occurred while deleting the comment");
    }
  })

export default router;