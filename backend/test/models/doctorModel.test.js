const mongoose = require("mongoose");
const Doctor = require("../../models/Doctor");

// MongoDB URI for the test database
const mongoDBURI = process.env.MONGO_URI;

// Mock data
const mockDoctorData = {
  user: new mongoose.Types.ObjectId(),
  patients: [new mongoose.Types.ObjectId(), new mongoose.Types.ObjectId()],
  dashboardStatistics: { patientsCount: 10 },
  specialization: "Cardiology",
  contact: {
    email: "doctor@example.com",
    phone_number: "123-456-7890",
    address: "123 Main St, City, Country",
  },
  experience: "10 years",
  monthlyReports: [{ month: "January", report: "Good" }],
};

// Increase the default Jest timeout (in milliseconds)
jest.setTimeout(300000); // 300 seconds

describe("Doctor Model Test Suite", () => {
  // Connect to the MongoDB test database before running tests
  beforeAll(async () => {
    await mongoose.connect(mongoDBURI);
  });

  // Clear test data after each test
  afterEach(async () => {
    await Doctor.deleteMany({});
  });

  // Close MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a new doctor", async () => {
    const doctor = new Doctor(mockDoctorData);
    const savedDoctor = await doctor.save();

    expect(savedDoctor._id).toBeDefined();
    expect(savedDoctor.specialization).toBe(mockDoctorData.specialization);
    expect(savedDoctor.contact.email).toBe(mockDoctorData.contact.email);
  });

  it("should find a doctor by specialization", async () => {
    const doctor = new Doctor(mockDoctorData);
    await doctor.save();

    const foundDoctor = await Doctor.findOne({ specialization: "Cardiology" });
    expect(foundDoctor).toBeDefined();
    expect(foundDoctor.specialization).toBe("Cardiology");
  });

  it("should update a doctor's specialization", async () => {
    const doctor = new Doctor(mockDoctorData);
    const savedDoctor = await doctor.save();

    savedDoctor.specialization = "Neurology";
    const updatedDoctor = await savedDoctor.save();

    expect(updatedDoctor.specialization).toBe("Neurology");
  });

  it("should delete a doctor", async () => {
    const doctor = new Doctor(mockDoctorData);
    const savedDoctor = await doctor.save();

    await Doctor.findByIdAndDelete(savedDoctor._id);
    const deletedDoctor = await Doctor.findById(savedDoctor._id);

    expect(deletedDoctor).toBeNull();
  });
});
