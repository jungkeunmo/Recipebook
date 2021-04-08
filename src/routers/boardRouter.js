import express from "express";
import boardController from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get(routes.RECIPE_WRITE, boardController.writeController);
boardRouter.get(routes.RECIPE_LIST, boardController.listController);

export default boardRouter;
