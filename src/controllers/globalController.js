import dotenv from "dotenv";
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

const helpController = async (req, res) => {
  res.render("screens/help");
};

const globalController = {
  homeController,
  loginController,
  foodrecipeController,
  forgotController,
  signUpController,
  helpController,
};

export default globalController;
