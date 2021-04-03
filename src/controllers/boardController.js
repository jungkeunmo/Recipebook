import { Mongoose } from "mongoose";
import Post from "../models/post";

const recipeWriteController = async (req, res) => {
  try {
    const PostData = await Post.find({});

    res.render("screens/recipeWrite", { PostData });
  } catch (e) {
    console.log(e);
  }
};

const recipelistController = (req, res) => {
  res.render("screens/recipelist");
};

const boradController = {
  recipeWriteController,
  recipelistController,
};

export default boradController;
