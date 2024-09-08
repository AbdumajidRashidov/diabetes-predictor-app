// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
// Register User
exports.register = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, googleId } =
    req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      role: "doctor",
      // Only set googleId if it exists
      ...(googleId && { googleId: req.body.googleId }),
      ...(googleAccessToken && {
        googleAccessToken: req.body.googleAccessToken,
      }),
      ...(googleRefreshToken && {
        googleRefreshToken: req.body.googleRefreshToken,
      }),
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Create role-specific document
    const doctor = new Doctor({ user: user._id });
    await doctor.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    if (err.code === 11000) {
      return res
        .status(409)
        .send("A user with the given email or ID already exists.");
    }

    res.status(500).send("Server error", err.message);
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        userId: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error", err.message);
  }
};
