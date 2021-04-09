import express from "express";
import boardController from "../controllers/boardController";
import { routers } from "../routers";

const boardRouter = express.Router();

boardRouter.get(routers.RECIPE_WRITE, boardController.writeController);
boardRouter.get(routers.RECIPE_LIST, boardController.listController);
boardRouter.get(routers.RECIPE_WRITEDB, boardController.writedbController);

export default boardRouter;
