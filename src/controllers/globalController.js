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

const forgotpasswordController = async (req, res) => {
  res.render("screens/forgotPassword");
};

const signUpController = async (req, res) => {
  res.render("screens/signUP");
};
const globalController = {
  homeController,
  loginController,
  foodrecipeController,
  forgotpasswordController,
  signUpController,
};

export default globalController;
