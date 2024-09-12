const request = require("supertest");
const app = require("../../app"); // Your Express app
const mongoose = require("mongoose");

// Mock Passport behavior
jest.mock("passport", () => ({
  use: jest.fn(),
  authenticate: jest.fn(() => (req, res, next) => next()), // mock authenticate method
  initialize: jest.fn(() => (req, res, next) => next()), // mock initialize method
  session: jest.fn(() => (req, res, next) => next()), // mock session method
  serializeUser: jest.fn(),
  deserializeUser: jest.fn(),
}));

describe("Google OAuth Controller", () => {
  it("should log in a user using Google OAuth", async () => {
    const res = await request(app).get("/auth/google/callback"); // Test your callback route

    expect(res.status).toBe(302); // Expect redirect to happen after login
    expect(res.headers.location).toBe("/dashboard"); // Expect redirect to dashboard after successful login
  });
});

// Close the MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});
