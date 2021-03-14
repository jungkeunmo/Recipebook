import post from "../models/post";

const homeController = (req, res) => {
  res.render("screens/home");
};

const postController = async (req, res) => {
  res.render("screens/post");
};

const globalController = {
  homeController,
  postController,
};

export default globalController;
