import express from "express";
import { hashPassword } from "../utils/bcrypt.js";
import { insertUser } from "../models/user/userModal.js";
import { newUserValidation } from "../middlewares/validation.js";
import { token } from "morgan";
import { deleteSession, insertSession } from "../models/session/sessionModal.js";
import { v4 as uuidv4 } from "uuid";
import { emailVerificationMail } from "../services/email/nodemailer.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "Success",
      message: "TODO",
    });
  } catch (error) {
    next(error);
  }
});
router.post("/", newUserValidation, async (req, res, next) => {
  try {
    console.log(req.body);

    req.body.password = hashPassword(req.body.password);
    const user = await insertUser(req.body);

    if (user?._id) {
      const token = uuidv4();
      const obj = {
        token,
        associate: user.email,
      };

      const result = await insertSession(obj);

      if (result?._id) {
        //Process for sending email
        emailVerificationMail({
          email: user.email,
          fName: user.fName,
          url:
            process.url.FE_ROOT_URL +
            `/verify-user?c${token} & e=${user.email}`,
        });

        return res.json({
          status: "Success",
          message:
            "We have send you an email please check the instruction to verify your account. Please check email/junk folder ",
        });
      }
    }

    //Create unique url  and add in the database
  } catch (error) {
    next(error);
  }
});

//user Varification
router.post("/user-verification",async (req,res,next)=>{
  try {
    const {c,e} = req.body

    //delete session data

    const session = await deleteSession({
      token:c,
      associate:e
    })
if(session?._id){
  session?._id ?
  res.json({
    status:"success",
    message:"Your account has been verified. you may sign in now"
  })


  //update admin table

  const result = await updateUser({email:e},{status:"active",isEmailVerified:true})

  if(result?._id){
    //send user an email
return res.json({
  status:"success",
  message:"Your account has been varified you may sign in now"
})

  }
}
 res.json({
  status:"error",
  message:"Invalid link,contact admin"
 })

    
  } catch (error) {
    
  }
})



export default router;
