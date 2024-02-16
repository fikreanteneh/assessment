import express from 'express';
import dotenv from 'dotenv'
import ErrorMiddlware from './middleware/errorMiddleware.js';
import taskRouter from './routes/task.router.js';
dotenv.config()

const app = express()
app.use(express.json())
app.use("/tasks", taskRouter)
app.use(ErrorMiddlware)
app.listen(process.env.PORT, () => {
    console.log("Listening on Port ", process.env.PORT);
 })