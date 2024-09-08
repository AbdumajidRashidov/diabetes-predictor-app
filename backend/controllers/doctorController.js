// controllers/doctorController.js
const Doctor = require("../models/Doctor");
const User = require("../models/User");
const Patient = require("../models/Patient");

// Create a new doctor
exports.createDoctor = async (req, res) => {
  try {
    const { firstname, lastname, email, phone_number } = req.body;

    // Create a new User for the doctor
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      firstname,
      lastname,
      email,
      phone_number,
      role: "doctor",
    });

    await user.save();

    // Create a new Doctor
    const doctor = new Doctor({
      user: user._id,
      patients: [],
      dashboardStatistics: {},
      monthlyReports: [],
    });

    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("user");
    res.json(doctors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get a single doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate("user");
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Update a doctor
exports.updateDoctor = async (req, res) => {
  try {
    const { firstname, lastname, email, phone_number } = req.body;

    let doctor = await Doctor.findById(req.params.id).populate("user");
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }

    // Update the associated User
    let user = await User.findById(doctor.user._id);
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.phone_number = phone_number;
    await user.save();

    await doctor.save();

    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }

    // Delete the associated User
    await User.findByIdAndRemove(doctor.user);

    // Delete the Doctor
    await doctor.remove();

    res.json({ msg: "Doctor removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Add multiple patients to a doctor
exports.addPatients = async (req, res) => {
  try {
    const { doctorId, patientIds } = req.body;

    // Validate input
    if (!doctorId || !Array.isArray(patientIds) || patientIds.length === 0) {
      return res
        .status(400)
        .json({ msg: "Doctor ID and patient IDs are required" });
    }

    // Find doctor
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }

    // Find and validate patients
    const patients = await Patient.find({ _id: { $in: patientIds } });
    if (patients.length !== patientIds.length) {
      return res.status(404).json({ msg: "One or more patients not found" });
    }

    // Add patients to doctor's list
    const newPatientIds = patientIds.filter(
      (patientId) => !doctor.patients.includes(patientId)
    );
    if (newPatientIds.length > 0) {
      doctor.patients.push(...newPatientIds);
      await doctor.save();
    }

    // Optional: Update patients with the doctor information
    await Patient.updateMany(
      { _id: { $in: patientIds } },
      { doctor: doctor.user }
    );

    res.json({ msg: "Patients added to doctor successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Remove multiple patients from a doctor
exports.removePatients = async (req, res) => {
  try {
    const { doctorId, patientIds } = req.body;

    // Validate input
    if (!doctorId || !Array.isArray(patientIds) || patientIds.length === 0) {
      return res
        .status(400)
        .json({ msg: "Doctor ID and patient IDs are required" });
    }

    // Find doctor
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }

    // Find and validate patients
    const patients = await Patient.find({ _id: { $in: patientIds } });
    if (patients.length !== patientIds.length) {
      return res.status(404).json({ msg: "One or more patients not found" });
    }

    // Remove patients from doctor's list
    const updatedPatients = doctor.patients.filter(
      (patientId) => !patientIds.includes(patientId.toString())
    );
    doctor.patients = updatedPatients;
    await doctor.save();

    // Optional: Update patients to remove the doctor reference
    await Patient.updateMany(
      { _id: { $in: patientIds } },
      { $unset: { doctor: "" } }
    );

    res.json({ msg: "Patients removed from doctor successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
