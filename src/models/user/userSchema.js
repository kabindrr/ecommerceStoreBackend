import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fName: {
    type: "String",
    required,
  },
  lName: {
    type: "String",
    required,
  },
  phone: {
    type: "Number",
    required,
  },
  email: {
    type: "String",
    required,
  },
  password: {
    type: "Password",
    required,
  },
});
export default mongoose.model("AdminTable", userSchema);
