const express = require("express");
const { loginController, registerController } = require("../controllers/user.controller");

const router = express.Router();

//Routes
//Login||POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register"registerController);


module.exports = router;
