const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Atit = require("../Module/Taskcontrol.js")



router.post("/api/post", Atit.ATITPostmethod);
router.get("/api/get", Atit.ATITgetMethod)



module.exports = router;