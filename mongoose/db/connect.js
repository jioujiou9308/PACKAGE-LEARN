require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

// * mongoose 連線
async function dbConnect() {
  try {
    await mongoose.connect(uri);
    console.log("success link");
  } catch (err) {
    console.log("wrong");
    console.log(err);
  }
}
module.exports = dbConnect;

// * mongodb 連線
// async function connectToCluster(uri) {
//   let mongoClient;
//   try {
//     mongoClient = new MongoClient(uri);
//     console.log("Connecting to MongoDB Atlas cluster...");
//     await mongoClient.connect();
//     console.log("Successfully connected to MongoDB Atlas!");

//     return mongoClient;
//   } catch (error) {
//     console.error("Connection to MongoDB Atlas failed!", error);
//     process.exit();
//   }
// }
// async function executeStudentCrudOperations() {
//   const uri = process.env.MONGO_URI;
//   let mongoClient;

//   try {
//     mongoClient = await connectToCluster(uri);
//   } finally {
//     await mongoClient.close();
//   }
// }
// executeStudentCrudOperations();
// module.exports = executeStudentCrudOperations
