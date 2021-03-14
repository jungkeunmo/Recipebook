import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/login", globalController.loginController);
globalRouter.get("/foodrecipe", globalController.foodrecipeController);

export default globalRouter;