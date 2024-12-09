const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

router.post("/create-inventory", authMiddlewares, createInventoryController);

router.get("/get-inventory", authMiddlewares, getInventoryController);

//get donar records
router.get("/get-donars", authMiddlewares, getDonarsController);

//get hospital records
router.get("/get-hospitals", authMiddlewares, getHospitalController);

module.exports = router;
