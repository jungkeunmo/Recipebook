import dotenv from "dotenv";
dotenv.config();

const homeController = (req, res) => {
    res.render("screens/home");
};

const loginController = async (req, res) => {
    res.render("screens/login");
};

const globalController = {
    homeController,
    loginController,
};

export default globalController;