import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "SUccess",
      message: "TODO",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
