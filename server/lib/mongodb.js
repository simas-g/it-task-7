import mongoose from "mongoose";
const MONGODB_URI = process.env.DB_CONNECTION_STRING;

async function connectToDb() {
  if (mongoose.connection.readyState === 1) {
    console.log("Using existing Mongoose connection.");
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Mongoose successfully connected to database`);
  } catch (error) {
    console.error("Mongoose connection failed:", error.message);
    throw error;
  }
}
export { connectToDb };
