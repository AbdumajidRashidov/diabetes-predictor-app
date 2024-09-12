const mongoose = require("mongoose");
const User = require("../../models/User");

// MongoDB URI for the test database
const mongoDBURI = process.env.MONGO_URI;

// Mock user data
const mockUserData = {
  googleId: "123456789",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "123-456-7890",
  password: "password123",
  profilePicture: "https://example.com/profile.jpg",
  role: "patient",
  googleAccessToken: "googleAccessToken123",
  googleRefreshToken: "googleRefreshToken123",
};

// Set a global timeout for the test suite
jest.setTimeout(30000);

describe("User Model Test Suite", () => {
  // Connect to the MongoDB test database before running tests
  beforeAll(async () => {
    await mongoose.connect(mongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clear test data after each test
  afterEach(async () => {
    await User.deleteMany({});
  });

  // Close MongoDB connection after all tests are done
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a new user", async () => {
    const user = new User(mockUserData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(mockUserData.email);
    expect(savedUser.firstName).toBe(mockUserData.firstName);
    expect(savedUser.role).toBe(mockUserData.role);
  });

  it("should find a user by email", async () => {
    const user = new User(mockUserData);
    await user.save();

    const foundUser = await User.findOne({ email: mockUserData.email });
    expect(foundUser).toBeDefined();
    expect(foundUser.email).toBe(mockUserData.email);
    expect(foundUser.firstName).toBe(mockUserData.firstName);
  });

  it("should update a user's phone number", async () => {
    const user = new User(mockUserData);
    const savedUser = await user.save();

    savedUser.phoneNumber = "987-654-3210";
    const updatedUser = await savedUser.save();

    expect(updatedUser.phoneNumber).toBe("987-654-3210");
  });

  it("should delete a user", async () => {
    const user = new User(mockUserData);
    const savedUser = await user.save();

    await User.findByIdAndDelete(savedUser._id);
    const deletedUser = await User.findById(savedUser._id);

    expect(deletedUser).toBeNull();
  });

  it("should return a validation error for missing required fields", async () => {
    const invalidUserData = {
      email: "invaliduser@example.com",
    };

    try {
      const user = new User(invalidUserData);
      await user.save();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.errors.firstName).toBeDefined();
      expect(error.errors.lastName).toBeDefined();
      expect(error.errors.email).toBeUndefined(); // email is present, so it should not throw an error
    }
  });
});
