import mongoose from "mongoose";
import models from "./models";

export default function() {
	mongoose.connect("mongodb://localhost:27017/todoapp");
};
