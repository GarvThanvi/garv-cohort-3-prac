import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;