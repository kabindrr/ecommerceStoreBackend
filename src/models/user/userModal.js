import userSchema from "./userSchema.js";

// create
export const addItem = () => {
  return userSchema(item).save();
};

// Read
export const getItem = () => {
  return userSchema.findById();
};

// Update
export const upDateItem = () => {
  return userSchema.updateOne();
};

// delete
export const deleteItem = () => {
  return userSchema.findByIdAndDelete();
};
