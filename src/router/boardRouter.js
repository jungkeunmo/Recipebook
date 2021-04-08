import express from "express";
import boardController from "../controllers/boardController";
import { routers } from "../routers";

const boardRouter = express.Router();

boardRouter.get(routers.RECIPE_WRITE, boardController.writeController);
boardRouter.get(routers.RECIPE_LIST, boardController.listController);

export default boardRouter;
