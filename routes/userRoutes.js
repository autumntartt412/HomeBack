import express from 'express';
import { db } from "../db/conn.mjs";
import { ObjectId } from "mongodb";
const router = express.Router();


  

// http://localhost:5000/user/6761dadffb99dbdc84a93ea7

// GET a user
router.route("/")
  .get(async (req, res, next) => {
    try {
      const collection = await db.collection("users");
      const result = await collection.find({}).toArray();
      console.log(result);
      res.status(200).send(result);
    } catch (error) {
      console.error("Error retrieving user:", error);
      res.status(500).send("Error retrieving user.");
    }
  })

  // POST a user
  .post(async (req, res) => {

    try {
      // Validate required fields
      if (!req.body.firstName|| !req.body.lastName || !req.body.email) {
        return res.status(400).send("Missing required fields");
      }

      const collection = await db.collection("users");
      const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contactNumber: req.body.contactNumber,
            email: req.body.email, 
      };

      const result = await collection.insertOne(newUser);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error inserting user:", error);
      res.status(500).send("Error inserting user.");
    }
  });


// http://localhost:5000/user/

// GET a user by its ID.
router
  .route("/:id")
  .get(async (req, res, next) => {
    let collection = await db.collection("users")
    let query = { _id: new ObjectId(req.params.id) }

    let result = await collection.findOne(query)

    console.log(result);
    if (!result) res.send("User not found.").status(404);
    else res.send(result).status(200);
  })


 // UPDATE a Home by its ID
 .put(async (req, res) => {
  try {
    const collection = await db.collection('users');
  let filter = { _id: new ObjectId(req.params.id) }
  let updatedUser = { 
    $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        email: req.body.email, 
    },
};
let result = await collection.updateOne(filter, updatedUser);
console.log(result);

if (!result.modifiedCount) {
  return res.status(404).send("User not found.");
}
return res.status(200).send(result);
} catch (error) {
console.error("Error updating user:", error);
return res.status(500).send("An error occurred while updating the user.");
}
})

  // DELETE a user by its ID
  .delete(async (req, res) => {
    try {
      let collection = await db.collection("users");
      let query = { _id: new ObjectId(req.params.id) };
    
      let result = await collection.deleteOne(query);
    
      if (!result.deletedCount) {
        return res.status(404).send("User not found.");
      }
      return res.status(200).send(result);
    } catch (error) {
      console.error("Error deleting User:", error);
      return res.status(500).send("An error occurred while deleting the User.");
    }
  })

export default router;