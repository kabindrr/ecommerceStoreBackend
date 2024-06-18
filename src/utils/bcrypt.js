import bcryptjs from "bcryptjs";
const saltRound = 10;

//hashPassword
export const hashPassword = (plainPassword) => {
  return bcryptjs.hashSync(plainPassword, saltRound);
};

// compare Password
export const comparePassword = (plainPassword, hashPassword) => {
  return bcryptjs.hashSync(plainPassword, hashPassword);
};
