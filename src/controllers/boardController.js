import dotenv from "dotenv";
dotenv.config();
import Post from "../models/Post";
import globalController from "../controllers/globalController";
import mongoose from "mongoose";
const writeController = async (req, res) => {
  res.render("screens/recipeWrite");
};

const listController = async (req, res) => {
  res.render("screens/recipelist");
};

const boardController = {
  writeController,
  listController,
};

export default boardController;
