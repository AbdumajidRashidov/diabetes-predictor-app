// routes/fitnessRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getDailySteps } = require("../controllers/fitnessController");

console.log(getDailySteps);

router.get("/daily-steps", getDailySteps);

module.exports = router;
