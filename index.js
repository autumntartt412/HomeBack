import express from 'express'
import 'dotenv/config.js'
import mongoose from 'mongoose'
import multer from 'multer'



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalName)
//   }
// })

// const upload = multer({ storage })


// const upload = multer({ dest: 'uploads/' });

// app.post('/api/upload', upload.single('image'), (req, res) => {
//   // Save the image path to your database
//   // ...

//   res.send({ message: 'Image uploaded successfully' });
// });


//import routes
 import routerHome from './routes/homeRoutes.js';
 import routerComment from './routes/commentRoutes.js';
 import routerUser from './routes/userRoutes.js';


// middleware 
const app = express();
const PORT = 5000;

app.use(express.json());

// Connect to Mongoose.
// You must specify the database you want to connect to in /conn strg.
// This defaults to the "test" database.
 await mongoose.connect(process.env.ATLAS_URI);




 app.use('/home', routerHome);
 app.use('/comment', routerComment);
 app.use('/user', routerUser);




app.get("/", (req, res) => {
    res.send("Welcome to the Homes API.");
  });


  
// app
//   .route("/upload", upload.single('file'))
//   .post(async (req, res) => {
//   res.json(req.file);
//   });



  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
  });