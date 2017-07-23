// import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
