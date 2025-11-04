import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  // Handle fetching user details
  res.send({title: "Get all users"});
});

userRouter.get("/:id", (req, res) => {
  // Handle fetching a specific user by ID
  res.send({title: `Get user with ID: ${req.params.id}`});
});

userRouter.post("/", (req, res) => {
  // Handle creating a new user
  res.send({title: "Create a new user"});
});

userRouter.put("/:id", (req, res) => {
  // Handle updating a specific user by ID
  res.send({title: `Update user with ID: ${req.params.id}`});
});

userRouter.delete("/:id", (req, res) => {
  // Handle deleting a specific user by ID
  res.send({title: `Delete user with ID: ${req.params.id}`});
});

export default userRouter;