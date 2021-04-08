import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.HOME, globalController.homeController);
globalRouter.get(routes.LOGIN, globalController.loginController);
globalRouter.get(routes.FOOD_RECIPE, globalController.foodrecipeController);
globalRouter.get(routes.FORGOT, globalController.forgotController);
globalRouter.get(routes.SIGNUP, globalController.signUpController);
globalRouter.get(routes.HELP, globalController.helpController);
globalRouter.get(routes.SAFETY, globalController.safetyController);
globalRouter.get(routes.QUESTION, globalController.questionController);
globalRouter.get(routes.PRECAUTIONS, globalController.precautionsController);
globalRouter.get(routes.SERVE, globalController.serveController);

export default globalRouter;
