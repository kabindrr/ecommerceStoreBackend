import SessionSchema from "./SessionSchema.js";

// create
export const insertSession = (sessionObj) => {
  return SessionSchema(sessionObj).save();
};

export const getSession = (filter) => {
  return SessionSchema.findOne(filter);
};
export const deleteSession = (filter) => {
  return SessionSchema.findOneAndDelete(filter);
};
