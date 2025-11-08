import { Router } from "express";
//import { sendReminders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.get("/start", (req, res) => {
  // Handle starting a new workflow
  res.send({ title: "Start a new workflow" });
});

//workflowRouter.post("/subscription/reminder", sendReminders);

export default workflowRouter;