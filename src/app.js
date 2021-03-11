import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import path from "path";
import connect from "../db/mongo";

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START🥕`);
});