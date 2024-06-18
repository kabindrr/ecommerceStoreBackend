import userSchema from "./userSchema.js";

// create
export const insertUser = (userObj) => {
  return userSchema(userObj).save();
};

// Read
export const getAUser = (filter) => {
  return userSchema.findOne(filter);
};
export const getAllUsers = () => {
  return userSchema.findOne();
};

// Update
export const updateUserById = ({ _id, obj }) => {
  return userSchema.findByIdAndUpdate(_id, obj);
};

// delete
export const deleteAUserById = ({ _id }) => {
  return userSchema.findByIdAndDelete();
};
