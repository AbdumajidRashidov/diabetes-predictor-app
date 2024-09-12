const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const MongoStore = require("connect-mongo"); // Add this line
const session = require("express-session");
const passport = require("passport");
const { swaggerUi, swaggerSpec } = require("./config/swagger"); // Import Swagger setup
require("dotenv").config();
require("./config/passport");
const predictRouter = require("./routes/predict");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/patients", require("./routes/patientRoutes"));
app.use("/doctors", require("./routes/doctorRoutes"));
app.use("/fitness", require("./routes/fitnessRoutes"));
app.use("/predict", predictRouter);

module.exports = app;
