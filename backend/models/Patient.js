// models/Patient.js
const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  birthdate: { type: Date },
  height: { type: Number },
  weight: { type: Number },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  gender: { type: String },
  pregnancies: { type: Number },
  location: { type: String },
  healthData: {
    glucose: [{ value: Number, date: Date }],
    bloodPressure: [{ value: Number, date: Date }],
    skinThickness: [{ value: Number, date: Date }],
    insulin: [{ value: Number, date: Date }],
    bmi: [{ value: Number, date: Date }],
    dpf: [{ value: Number, date: Date }],
    isDiabetes: { value: Boolean, confidentiality: String },
    bodyFatPercentage: [{ value: Number, date: Date }],
    bodyTemperature: [{ value: Number, date: Date }],
    cervicalMucus: [{ value: Number, date: Date }],
    cervicalPosition: [
      { position: String, dilation: String, firmness: String, date: Date },
    ],
    heartRate: [{ bpm: Number, date: Date }],
    // Add other health data attributes
  },
});

module.exports = mongoose.model("Patient", PatientSchema);
