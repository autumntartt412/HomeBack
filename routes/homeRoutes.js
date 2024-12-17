import express from 'express';
import { db } from "../db/conn.mjs";
import { ObjectId } from "mongodb";
const router = express.Router();


// GET a home
router.route("/")
  .get(async (req, res, next) => {
    try {
      const collection = await db.collection("homes");
      const result = await collection.find({}).toArray();
      console.log(result);
      res.status(200).send(result);
    } catch (error) {
      console.error("Error retrieving homes:", error);
      res.status(500).send("Error retrieving homes");
    }
  })

  // POST a home
  .post(async (req, res) => {
    // const title = req.body.Title
    // console.log(title);
    // return res.status(200).json({message: "Request Received"});
    try {
      // Validate required fields
      if (!req.body.title || !req.body.price || !req.body.location) {
        return res.status(400).send("Missing required fields");
      }

      const collection = await db.collection("homes");
      const newHome = {
        title: req.body.title,
        price: req.body.price,
        location: req.body.location,
        image: req.body.image,
        isAvailable: req.body.available,
      };

      const result = await collection.insertOne(newHome);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error inserting home:", error);
      res.status(500).send("Error inserting home");
    }
  });


// http://localhost:5000/home/6761b10b1697e7f384c3e584

// GET a home by its ID.
router
  .route("/:id")
  .get(async (req, res, next) => {
    let collection = await db.collection("homes")
    let query = { _id: new ObjectId(req.params.id) }

    let result = await collection.findOne(query)

    console.log(result);
    if (!result) res.send("Home not found").status(404);
    else res.send(result).status(200);
  })


 // UPDATE a house by its ID
 .put(async (req, res) => {
  try {
    const collection = await db.collection('homes');
  let filter = { _id: new ObjectId(req.params.id) }
  let updatedHouse = { 
    $set: {
          name: req.body.name,
          breed: req.body.breed,
          color: req.body.color,
          gender: req.body.gender,
          age: req.body.age,
          isAvailable: req.body.available,
    },
};
let result = await collection.updateOne(filter, updatedHouse);
console.log(result);

if (!result.modifiedCount) {
  return res.status(404).send("House not found");
}
return res.status(200).send(result);
} catch (error) {
console.error("Error updating house:", error);
return res.status(500).send("An error occurred while updating the house");
}
})

  // DELETE a home by its ID
  .delete(async (req, res) => {
    try {
      let collection = await db.collection("homes");
      let query = { _id: new ObjectId(req.params.id) };
    
      let result = await collection.deleteOne(query);
    
      if (!result.deletedCount) {
        return res.status(404).send("Home not found");
      }
      return res.status(200).send(result);
    } catch (error) {
      console.error("Error deleting house:", error);
      return res.status(500).send("An error occurred while deleting the home");
    }
  })

export default router;