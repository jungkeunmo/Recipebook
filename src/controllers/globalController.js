import dotenv from "dotenv";
import { render } from "pug";
dotenv.config();

const homeController = (req, res) => {
  res.render("screens/home");
};

const loginController = async (req, res) => {
  res.render("screens/login");
};

const foodrecipeController = async (req, res) => {
  res.render("screens/foodrecipe");
};

const forgotController = async (req, res) => {
  res.render("screens/forgot");
};

const signUpController = async (req, res) => {
  res.render("screens/signUP");
};
const globalController = {
  homeController,
  loginController,
  foodrecipeController,
  forgotController,
  signUpController,
};

export default globalController;
