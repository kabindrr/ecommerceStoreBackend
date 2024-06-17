import mongoose from "mongoose";

const uri = process.env.MONGO_URL;

export const connectMongoDb = () => {
  try {
    mongoose.connect(uri);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error.message);
  }
};
