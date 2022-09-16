const express = require("express");
const myAppController = require("../controllers/myApp.controllers");
const router = express.Router();
const checkHost=require("../middleware/check-host");

router.get("/external", myAppController.external);

module.exports = router;