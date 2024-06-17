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
router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "Success",
      message: "TODO",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
