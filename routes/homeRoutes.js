import express from 'express'
import {db} from "../db/conn.mjs"
// import { ObjectId } from "mongodb";

// http://localhost:5000/home
const router = express.Router();
// GET a home
router
  .route("/")
  .get(async (req, res, next) => {
    let collection = await db.collection("homes")
    let result = await collection.find({}).toArray()
    console.log(result);
    res.send(result).status(200);
  })

 // POST a home
 .post(async (req, res) => {
    const collection = await db.collection("homes")
    const newHome = {
      title: req.body.title,
      price: req.body.price,
      location: req.body.location,
      image: req.body.image,
      // isAvailable: req.body.available,
    };

    let result = await collection.insertOne(newHome)
    res.status(201).json(result);
   
  });

export default router