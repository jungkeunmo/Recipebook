import Post from "../models/post";
import dotenv from "dotenv";
dotenv.config();

const recipeWriteController = async (req, res) => {
  try {
    const PostData = await Post.find({});

    res.render("screens/recipeWrite", { PostData });
  } catch (e) {
    console.log(e);
    res.render("screens/home");
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
