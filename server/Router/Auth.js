const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");

require("../DB/DBconn");
const User = require("../Model/userSchema");

router.get("/", (req, res) => {
  res.send("HELLO World");
});

// Signin

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cfpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cfpassword) {
    return res
      .status(422)
      .json({ error: "Please fill the credentials properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "User already exist" });
    } else if (password != cfpassword) {
      return res.status(422).json({ error: "Password not matching" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cfpassword,
      });

      const userRegistered = await user.save();

      if (userRegistered) {
        res.status(201).json({ message: "User registered successfully." });
      } else {
        res.status(500).json({ error: "Unable to register user." });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// Login

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all fields" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 180000000),
        httpOnly: true,
      });

      if (isMatch) {
        res.json({ message: "User Signin Successfully" });
       
      } else res.json({ error: "Invalid credentials" });
    } else {
      res.json({ error: "User not found." });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
