const request = require("supertest");
const app = require("../../app.js");
const mongoose = require("mongoose");

describe("API Routes", () => {
  it("POST /api/predict should return diabetes prediction", async () => {
    const res = await request(app).post("/predict").send({
      glucose: 120,
      insulin: 150,
      bmi: 28.0,
      age: 35,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.prediction).toBeDefined();
  }, 10000);
});

// Close the MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});
