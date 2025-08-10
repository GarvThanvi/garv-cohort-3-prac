import mongoose from "mongoose";
import "dotenv/config";

await mongoose
  .connect(
    process.env.MONGODB_STRING
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error("Error connecting to DB ", error);
  });