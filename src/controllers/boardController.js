import dotenv from "dotenv";
dotenv.config();
import Post from "../models/Post";
import globalController from "../controllers/globalController";
import mongoose from "mongoose";
const writeController = async (req, res) => {
  const type = req.params.type;

  res.render("screens/recipeWrite", { type });
};

const listController = async (req, res) => {
  try {
    const postData = await Post.findOne({ _id: req.params.id });

    const currentHit = postData.hit;

    res.render("screens/recipelist", { postData, currentHit });
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const writedbController = async (req, res) => {
  res.render("screens/recipewriteDb");
};
const boardController = {
  writeController,
  listController,
  writedbController,
};

export default boardController;
