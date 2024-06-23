import userSchema from "./UserSchema.js";

// create
export const insertUser = (userObj) => {
  return userSchema(userObj).save();
};

// Read
export const getAUser = (filter) => {
  return userSchema.findOne(filter);
};
export const getAllUsers = () => {
  return userSchema.find();
};

// Update
export const updateUserById = ({ _id, obj }) => {
  return userSchema.findByIdAndUpdate(_id, obj);
};

// delete
export const updateUser = ({ filter, obj }) => {
  return userSchema.findOneAndUpdate(filter, obj);
};
