import express from 'express'
import mongoose from 'mongoose'

// import 'dotenv/config.js'
// import dotenv from "dotenv"
// dotenv.config();


// middleware 
const PORT = 5000;
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to the Homes API.");
  });


  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
  });