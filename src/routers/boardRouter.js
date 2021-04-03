import express from "express";
import boardController from "../controllers/boardController";

const boradRouter = express.Router();

boradRouter.get("/recipelist", boardController.recipelistController);
boradRouter.get("/recipeWrite", boardController.recipeWriteController);

export default boradRouter;
