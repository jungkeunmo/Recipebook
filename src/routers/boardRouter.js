import express from "express";
import boardController from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/reciepWrite", boardController.writeController);
boardRouter.get("/recipelist", boardController.listController);

export default boardRouter;
