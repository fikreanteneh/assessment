import express from "express";
import {
  AddTask,
  DeleteTask,
  GetTask,
  GetTaskById,
  UpdateTask,
} from "../controllers/task.controller";

const taskRouter = express.Router();

taskRouter.get("/", GetTask);
taskRouter.get("/:id", GetTaskById);
taskRouter.post("", AddTask);
taskRouter.put("/:id", UpdateTask);
taskRouter.delete("/:id", DeleteTask);

export default taskRouter;
