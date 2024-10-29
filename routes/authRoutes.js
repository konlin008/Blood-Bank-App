const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authContoller");
const authMiddlewares = require("../middlewares/authMiddlewares");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/current-user", authMiddlewares, currentUserController)
module.exports = router;
