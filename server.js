import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 8001;

//db connect
import { connectMongoDb } from "./src/config/mongoDbConfig.js";

connectMongoDb();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// apis
// import userRouter from "./src/routers/userRouter.js";
// app.use("/api/v1/users", userRouter);

import routers from "./src/routers/routers.js";
routers.forEach(({ path, middlewawers }) => app.use(path, ...middlewawers));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server connected at PORT ${PORT}`);
});
