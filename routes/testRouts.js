const express = require("express");
const { testControler } = require("../controllers/testController");

const router = express.Router();


router.get("/", testControler);


module.exports = router;
