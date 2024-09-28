const express = require("express");
const { registerControler } = require("../controllers/authContoller");

const router = express.Router();


router.post('/register',registerControler );

module.exports = router;