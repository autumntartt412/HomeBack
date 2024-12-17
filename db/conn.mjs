import 'dotenv/config.js'
import { MongoClient } from 'mongodb';


const connectionString = process.env.ATLAS_URI || "";
console.log(connectionString)

const client = new MongoClient(connectionString);
  
try {

  await client.connect();
  console.log("connected to mongoDB");
} catch (e) {
  console.error(e);
}
// we are now connected to the cluster on MongoDb 
const db = client.db("Home");

export {db};