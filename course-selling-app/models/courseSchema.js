import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  createrId: {
    type: ObjectId,
    ref: "Admin",
  },
});

const Course = mongoose.model("Course", courseSchema);
export default Course;