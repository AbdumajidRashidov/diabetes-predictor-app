// fitnessController.js
const { getStepsData } = require("../fitnessapi/getStepsData.js");

exports.getDailySteps = async (req, res) => {
  try {
    const user = req.user; // Assuming user is attached to request via middleware
    console.log("User:", user);
    const stepsData = await getStepsData(user);
    res.json({ success: true, data: stepsData });
  } catch (error) {
    console.error("Failed to fetch steps data:", error);
    res.status(500).send("Internal Server Error");
  }
};
