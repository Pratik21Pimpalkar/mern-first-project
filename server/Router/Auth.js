const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Authenticate = require("../middleware/Authenticate");

require("../DB/DBconn");
const User = require("../Model/userSchema");

// Signup

router.post("/signup", async (req, res) => {
  const { name, email, work, password, cfpassword } = req.body;

  if (!name || !email || !work || !password || !cfpassword) {
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
      let token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 180000000),
        httpOnly: true,
      });

      if (isMatch) {
        res.json({ message: "User Signin Successfully" });
      } else res.status(400).json({ error: "Invalid credentials" });
    } else {
      res.status(400).json({ error: "User not found." });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", Authenticate, (req, res) => {
  res.send(req.rootUser);
});
router.get("/getdata", Authenticate, (req, res) => {
  res.send(req.UserID);
});

router.post("/contact", Authenticate, async (req, res) => {
  try {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      console.log("Unable to send msg");
      return res.json({ error: "Unable to send msg" });
    }

    const contact = await User.findOne({ _id: req.UserID });
   
    if (contact) {
      const contactMsg = await contact.addMessage(name, email, message);
      await contact.save();
      res.status(201).json({ Message: "Message send Successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
