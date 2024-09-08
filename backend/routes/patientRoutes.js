// routes/patientRoutes.js
const express = require("express");
const router = express.Router();
const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");
const auth = require("../middleware/authMiddleware");

// @route   POST /patients
// @desc    Create a patient
// @access  Private
router.post("/", auth, createPatient);

// @route   GET /patients
// @desc    Get all patients
// @access  Private
router.get("/", auth, getPatients);

// @route   GET /patients/:id
// @desc    Get a patient by ID
// @access  Private
router.get("/:id", auth, getPatientById);

// @route   PUT /patients/:id
// @desc    Update a patient
// @access  Private
router.put("/:id", auth, updatePatient);

// @route   DELETE /patients/:id
// @desc    Delete a patient
// @access  Private
router.delete("/:id", auth, deletePatient);

module.exports = router;
