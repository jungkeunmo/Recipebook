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

const questionController = (req, res) => {
  res.render("footers/question");
};

const precautionsController = (req, res) => {
  res.render("screens/precautions");
};

const serveController = async (req, res) => {
  res.render("screens/serve");
};

const globalController = {
  homeController,
  loginController,
  foodrecipeController,
  forgotController,
  signUpController,
  helpController,
  safetyController,
  questionController,
  precautionsController,
  serveController,
};

export default globalController;
