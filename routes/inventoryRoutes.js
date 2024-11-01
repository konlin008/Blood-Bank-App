const express = require('express')
const authMiddlewares = require('../middlewares/authMiddlewares')
const { createInventoryController } = require('../controllers/inventoryController')

const router = express.Router()

router.post('/create-inventory', authMiddlewares, createInventoryController);

module.exports = router