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
  res.render("footers/help");
};

const safetyController = async (req, res) => {
  res.render("footers/safety");
};

const recipeWriteController = (req, res) => {
  res.render("screens/recipeWrite");
};

const questionController = (req, res) => {
  res.render("footers/question");
};

const precautionsController = (req, res) => {
  res.render("screens/precautions");
};

const recipelistController = (req, res) => {
  res.render("screens/recipelist");
};
const globalController = {
  homeController,
  loginController,
  foodrecipeController,
  forgotController,
  signUpController,
  helpController,
  safetyController,
  recipeWriteController,
  questionController,
  precautionsController,
  recipelistController,
};

export default globalController;
