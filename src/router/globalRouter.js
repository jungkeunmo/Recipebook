import express from "express";
import globalController from "../controllers/globalController";
import { routers } from "../routers";
const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);
globalRouter.get(routers.LOGIN, globalController.loginController);
globalRouter.get(routers.FOOD_RECIPE, globalController.foodrecipeController);
globalRouter.get(routers.FORGOT, globalController.forgotController);
globalRouter.get(routers.SIGNUP, globalController.signUpController);
globalRouter.get(routers.HELP, globalController.helpController);
globalRouter.get(routers.SAFETY, globalController.safetyController);
globalRouter.get(routers.QUESTION, globalController.questionController);
globalRouter.get(routers.PRECAUTIONS, globalController.precautionsController);
globalRouter.get(routers.SERVE, globalController.serveController);

export default globalRouter;
