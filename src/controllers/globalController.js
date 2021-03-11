import Writing from "../models/Writing";

const homeController = (req, res) => {
  res.render("screens/home");
};

const WritingController = async (req, res) => {
  const WritingList = await Writing.find({}, {});

  console.log(WritingList);

  res.render("screens/Writing", { WritingList });
};

const globalController = {
  homeController,
  WritingController,
};

export default globalController;
