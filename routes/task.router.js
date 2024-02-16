import express from "express";
import {
  AddTask,
  DeleteTask,
  GetTask,
  GetTaskById,
  UpdateTask,
} from "../controllers/task.controller.js";

import CatchError from './../middleware/catchError.js';

const taskRouter = express.Router();

taskRouter.get("/", CatchError(GetTask));
taskRouter.get("/:id", CatchError(GetTaskById));
taskRouter.post("", CatchError(AddTask));
taskRouter.put("/:id", CatchError(UpdateTask));
taskRouter.delete("/:id", CatchError(DeleteTask));

export default taskRouter;
