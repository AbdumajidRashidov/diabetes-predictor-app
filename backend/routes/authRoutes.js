// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const { register, login } = require("../controllers/authController");

// Register user
router.post("/register", register);

// Login user
router.post("/login", login);

// Google OAuth route
router.get(
  "/google",
  passport.authenticate("google", {
    scope: process.env.GOOGLE_OAUTH_SCOPE.split(" "),
    accessType: "offline",
    prompt: "consent",
  }),

  async (req, res) => {
    // If password is set, proceed to the dashboard
    res.redirect("/dashboard");
  }
);

// Google OAuth callback route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/dashboard",
    accessType: "offline",
    prompt: "consent",
    scope: process.env.GOOGLE_OAUTH_SCOPE.split(" "),
  }),

  async (req, res) => {
    // If password is set, proceed to the dashboard
    res.redirect("/dashboard");
  }
);
// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// @route   GET /auth/current_user
// @desc    Get current user
router.get("/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
