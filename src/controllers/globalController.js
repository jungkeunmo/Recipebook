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

const globalController = {
    homeController,
    loginController,
    foodrecipeController,
};

export default globalController;