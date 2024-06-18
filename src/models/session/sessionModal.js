import SessionSchema from "./sessionSchema.js";

// create
export const insertSession = (sessionObj) => {
  return SessionSchema(sessionObj).save();
};
export const deleteSession = () => {
  return SessionSchema(sessionObj).save();
};
