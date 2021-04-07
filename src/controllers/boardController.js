import dotenv from "dotenv";
dotenv.config();
import Post from "../models/Post";
import globalController from "../controllers/globalController";
import mongoose from "mongoose";
const writeController = async (req, res) => {
  try {
    const postData = await Post.find({});

    const currentHit = postData.hit;
    const nextHit = parseInt(currentHit) + 1;

    await Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          hit: nextHit,
        },
      }
    );

    res.render("screens/recipeWrite", { postData });
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const listController = async (req, res) => {
  res.render("screens/list");
};

const boardController = {
  writeController,
  listController,
};

export default boardController;
