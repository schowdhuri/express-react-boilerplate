import path from "path";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "static")));

export default app;
