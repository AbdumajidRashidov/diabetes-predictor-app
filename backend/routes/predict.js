const express = require("express");
const { spawn } = require("child_process");
const router = express.Router();

// POST /predict - Endpoint for Diabetes Prediction
router.post("/", async (req, res) => {
  try {
    const { glucose, insulin, bmi, age } = req.body;

    // // Ensure that the required fields are provided
    // if (!glucose || !insulin || !bmi || !age) {
    //   return res
    //     .status(400)
    //     .json({ message: "All health parameters are required!" });
    // }

    // Call the Python script and pass the health data to it
    const pythonProcess = spawn("python3", [
      "ai/predict_model.py",
      glucose,
      insulin,
      bmi,
      age,
    ]);

    // Collect data from the Python script
    pythonProcess.stdout.on("data", (data) => {
      const prediction = data.toString().split("\n")[0];
      const probability = data.toString().split("\n")[1];
      console.log(`Prediction: ${prediction} \nProbability: ${probability}`);
      return res.status(200).json({ prediction, probability });
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Error: ${data}`);
      return res.status(500).json({ message: "Internal server error" });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
