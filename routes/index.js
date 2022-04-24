import express from "express";
import userRouter from "./user.route.js";
import submissionRouter from "./submission.route.js";
import marksheetRouter from "./marksheet.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/submission", submissionRouter);
apiRouter.use("/marksheet", marksheetRouter);

export default apiRouter;
