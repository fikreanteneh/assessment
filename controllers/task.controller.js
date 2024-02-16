import { provideDatabase } from "../middleware/serviceProvide.js";

export const GetTask = async (req, res, next) => {
    const db = provideDatabase();
    console.log("Yessssss")
    return res.status(200).json({ "tasks": db.GetAll() });
};
export const GetTaskById = async (req, res, next) => {
  const db = provideDatabase();
  const id = req.param.id;
  return res.status(200).json(db.GetById(id));
};
export const AddTask = async (req, res, next) => {
  const data = req.body;
  const db = provideDatabase();
  return res.status(200).json(db.Add(data));
};
export const DeleteTask = async (req, res, next) => {
  const db = provideDatabase();
  const id = req.param.id;
  return res.status(200).json(db.Delete(id));
};
export const UpdateTask = async (req, res, next) => {
  const db = provideDatabase();
  const id = req.param.id;
  const data = req.body;
  return res.status(200).json(db.UpdateTask(id, data));
};
