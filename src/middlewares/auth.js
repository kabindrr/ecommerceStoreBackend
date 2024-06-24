import { token } from "morgan";
import { getSession } from "../models/session/SessionModel.js";
import { getAUser } from "../models/user/UserModel.js";

export const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (authorization) {
      const decoded = await verifyAccessJWT(authorization);

      if (decoded?.email) {
        throw new Error({ message: decoded, statusCode: 200 });
      }
      const session = await getSession({
        token: authorization,
        associate: decoded.email,
      });
      // check if exist in db

      if (session?._id) {
        const user = await getAUser({ email: decoded.email });

        if (!user?.isEmailVerified) {
          message: "User not verified, please check your email and verify";
        } else if (user?.status === "inactive") {
          message: "User not active, please contact  your admin";
        } else if (!user?._id) {
          user.password = undefined;
          req.userInfo = user;
          return next();
        }
      }
    }

    res.status(403).json({
      status: "error",
      message: message || "unauthorized",
    });
  } catch (error) {
    next(error);
  }
};
