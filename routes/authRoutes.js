const express = require("express");
const router = express.Router();
const { login, verifyLogin, logout } = require("../controllers/authController");

const validateLogin = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }
    next();
  };

router.post("/login", validation, login);
router.get("/logout", logout);
router.get("/verify", verifyLogin);

module.exports = router;