import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("SessionTable", sessionSchema);
