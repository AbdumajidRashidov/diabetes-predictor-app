const mongoose = require("mongoose");
const Patient = require("../../models/Patient");

// MongoDB URI for the test database
const mongoDBURI = process.env.MONGO_URI;

// Mock patient data
const mockPatientData = {
  user: new mongoose.Types.ObjectId(),
  birthdate: new Date("1990-05-15"),
  height: 175,
  weight: 70,
  doctor: new mongoose.Types.ObjectId(),
  gender: "male",
  pregnancies: 0,
  location: "New York",
  healthData: {
    glucose: [{ value: 110, date: new Date() }],
    bloodPressure: [{ value: 120, date: new Date() }],
    skinThickness: [{ value: 20, date: new Date() }],
    insulin: [{ value: 15, date: new Date() }],
    bmi: [{ value: 23.5, date: new Date() }],
    dpf: [{ value: 0.8, date: new Date() }],
    isDiabetes: { value: false, confidentiality: "low" },
    bodyFatPercentage: [{ value: 18, date: new Date() }],
    bodyTemperature: [{ value: 36.5, date: new Date() }],
    cervicalMucus: [{ value: 2, date: new Date() }],
    cervicalPosition: [
      {
        position: "low",
        dilation: "closed",
        firmness: "soft",
        date: new Date(),
      },
    ],
    heartRate: [{ bpm: 75, date: new Date() }],
  },
};

// Set a global timeout for the test suite
jest.setTimeout(30000);

describe("Patient Model Test Suite", () => {
  // Connect to the MongoDB test database before running tests
  beforeAll(async () => {
    await mongoose.connect(mongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clear test data after each test
  afterEach(async () => {
    await Patient.deleteMany({});
  });

  // Close MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a new patient", async () => {
    const patient = new Patient(mockPatientData);
    const savedPatient = await patient.save();

    expect(savedPatient._id).toBeDefined();
    expect(savedPatient.gender).toBe(mockPatientData.gender);
    expect(savedPatient.height).toBe(mockPatientData.height);
    expect(savedPatient.healthData.glucose[0].value).toBe(
      mockPatientData.healthData.glucose[0].value
    );
  });

  it("should find a patient by location", async () => {
    const patient = new Patient(mockPatientData);
    await patient.save();

    const foundPatient = await Patient.findOne({ location: "New York" });
    expect(foundPatient).toBeDefined();
    expect(foundPatient.location).toBe("New York");
  });

  it("should update a patient's weight", async () => {
    const patient = new Patient(mockPatientData);
    const savedPatient = await patient.save();

    savedPatient.weight = 75;
    const updatedPatient = await savedPatient.save();

    expect(updatedPatient.weight).toBe(75);
  });

  it("should delete a patient", async () => {
    const patient = new Patient(mockPatientData);
    const savedPatient = await patient.save();

    await Patient.findByIdAndDelete(savedPatient._id);
    const deletedPatient = await Patient.findById(savedPatient._id);

    expect(deletedPatient).toBeNull();
  });
});
