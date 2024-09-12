// models/Doctor.js
const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
  dashboardStatistics: Object,
  specialization: String,
  contact: {
    email: String,
    phone_number: String,
    address: String,
  },
  experience: String,
  monthlyReports: [Object],
});

module.exports = mongoose.model("Doctor", DoctorSchema);
