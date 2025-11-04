import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  // Handle user login
  res.send({title: "Sign up"});
});

authRouter.post("/sign-in", (req, res) => {
  // Handle user login
  res.send({ title: "Login"});
});

authRouter.post("/sign-out", (req, res) => {
  // Handle user logout
  res.send({title: "Logout"});
});

export default authRouter;