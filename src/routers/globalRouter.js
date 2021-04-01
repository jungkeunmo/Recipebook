import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/login", globalController.loginController);
globalRouter.get("/foodrecipe", globalController.foodrecipeController);
globalRouter.get("/forgot", globalController.forgotController);
globalRouter.get("/signUp", globalController.signUpController);
globalRouter.get("/help", globalController.helpController);
globalRouter.get("/safety", globalController.safetyController);
globalRouter.get("/recipeWrite", globalController.recipeWriteController);
globalRouter.get("/question", globalController.questionController);
globalRouter.get("/precautions", globalController.precautionsController);
globalRouter.get("/recipelist", globalController.recipelistController);

export default globalRouter;
