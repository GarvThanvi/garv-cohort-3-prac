import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;
const purchaseSchema = new mongoose.Schema({
  courseId: {
    type: ObjectId,
    ref: "Course",
  },
  userId: {
    type: ObjectId,
    ref: "User",
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase;
