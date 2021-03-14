import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/login", globalController.loginController);
globalRouter.get("/foodrecipe", globalController.foodrecipeController);
globalRouter.get("/forgotPassword", globalController.forgotpasswordController);
globalRouter.get("/signUp", globalController.signUpController);

export default globalRouter;
