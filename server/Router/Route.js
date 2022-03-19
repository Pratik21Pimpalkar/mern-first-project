const express = require("express");
const router = express.Router();
require("../DB/DBconn");
const User= require("../Model/userSchema");

router.get("/", (req, res) => {
  res.send("HELLO World");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cfpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cfpassword) {
    return res.status(422).json({ error: "Please fill the credentials properly" });
  } 
  User.findOne({email:email}).then((userExist)=>{
      if(userExist){
          return res.status(422).json({error: "User already exist"})
      }

      const user= new User({name, email, phone, work, password, cfpassword})

      user.save().then(()=>{
          res.status(201).json({message: "User registered successfully."})
      }).catch(err=>{res.status(500).json({error:"Unable to register user."})})

  }).catch(err=>{console.log(err)})
});

module.exports = router;
