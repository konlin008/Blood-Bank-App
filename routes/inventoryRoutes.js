const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const { createInventoryController, getInventoryController, } = require("../controllers/inventoryController");

const router = express.Router();

router.post("/create-inventory", authMiddlewares, createInventoryController);

router.get("/get-inventory", authMiddlewares, getInventoryController);
module.exports = router;