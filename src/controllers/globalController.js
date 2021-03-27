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
  try {
    res.render("screens/signUp");
    const SignupData = await SignupData.find();
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const helpController = async (req, res) => {
  res.render("footers/help");
};

const safetyController = async (req, res) => {
  res.render("footers/safety");
};

const recipeWrittenController = (req, res) => {
  res.render("screens/recipeWritten");
};

const questionController = (req, res) => {
  res.render("footers/question");
};

const noticeController = (req, res) => {
  res.render("footers/notice");
};

const precautionsController = (req, res) => {
  res.render("screens/precautions");
};

const globalController = {
  homeController,
  loginController,
  foodrecipeController,
  forgotController,
  signUpController,
  helpController,
  safetyController,
  recipeWrittenController,
  questionController,
  noticeController,
  precautionsController,
};

export default globalController;
