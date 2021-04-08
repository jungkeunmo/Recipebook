import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import path from "path";
import globalRouter from "./router/globalRouter";
import boardRouter from "./router/boardRouter";
import bodyParser from "body-parser";

const PORT = process.env.PORT;
const app = express();

app.use(morgan(`dev`));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);
app.use("/", boardRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START🥕`);
});
