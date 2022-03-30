const jwt = require("jsonwebtoken");
const User = require("../Model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const tokenVerify = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: tokenVerify._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      const error= new Error("User not Found");
      throw error;
    }
    req.token=token;
    req.rootUser=rootUser;
    req.UserID=rootUser._id;

    next();

  } catch (error) {
    res.status(401).send("Unauthorized Token");
    console.log(error);
  }
};

module.exports = Authenticate;
