// controllers/patientController.js
const Patient = require("../models/Patient");
const User = require("../models/User");

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phone_number,
      birthdate,
      height,
      weight,
      gender,
      doctor,
      pregnancies,
      location,
    } = req.body;

    // Create a new User for the patient
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      firstname,
      lastname,
      email,
      phone_number,
      role: "patient",
    });

    await user.save();

    // Create a new Patient
    const patient = new Patient({
      user: user._id,
      birthdate,
      height,
      weight,
      gender,
      doctor,
      pregnancies,
      location,
      healthData: {},
    });

    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate("user").populate("doctor");
    res.json(patients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get a single patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id)
      .populate("user")
      .populate("doctor");
    if (!patient) {
      return res.status(404).json({ msg: "Patient not found" });
    }
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Update a patient
exports.updatePatient = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phone_number,
      birthdate,
      height,
      weight,
      gender,
      doctor,
      pregnancies,
      location,
    } = req.body;

    let patient = await Patient.findById(req.params.id).populate("user");
    if (!patient) {
      return res.status(404).json({ msg: "Patient not found" });
    }

    // Update the associated User
    let user = await User.findById(patient.user._id);
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.phone_number = phone_number;
    await user.save();

    // Update the Patient
    patient.birthdate = birthdate;
    patient.height = height;
    patient.weight = weight;
    patient.gender = gender;
    patient.doctor = doctor;
    patient.pregnancies = pregnancies;
    patient.location = location;
    await patient.save();

    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ msg: "Patient not found" });
    }

    // Delete the associated User
    await User.findByIdAndRemove(patient.user);

    // Delete the Patient
    await patient.remove();

    res.json({ msg: "Patient removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
