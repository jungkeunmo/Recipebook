import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import path from "path";
import globalRouter from "./routers/globalRouter";
import boardRouter from "./routers/boardRouter";

const PORT = process.env.PORT;
const app = express();

app.use(morgan(`dev`));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START🥕`);
});
