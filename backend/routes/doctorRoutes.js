// routes/doctorRoutes.js
const express = require("express");
const router = express.Router();
const {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  addPatients,
  removePatients,
} = require("../controllers/doctorController");
const auth = require("../middleware/authMiddleware");

// @route   POST /doctors
// @desc    Create a doctor
// @access  Private
router.post("/", auth, createDoctor);

// @route   GET /doctors
// @desc    Get all doctors
// @access  Private
router.get("/", auth, getDoctors);

// @route   GET /doctors/:id
// @desc    Get a doctor by ID
// @access  Private
router.get("/:id", auth, getDoctorById);

// @route   PUT /doctors/:id
// @desc    Update a doctor
// @access  Private
router.put("/:id", auth, updateDoctor);

// @route   DELETE /doctors/:id
// @desc    Delete a doctor
// @access  Private
router.delete("/:id", auth, deleteDoctor);

// @route   POST /doctors/add-patients
// @desc    Add patients to a doctor
// @access  Private
router.post("/add-patients", addPatients);

// @route   POST /doctors/remove-patients
// @desc    Remove patients to a doctor
// @access  Private
router.post("/remove-patients", removePatients);

module.exports = router;
