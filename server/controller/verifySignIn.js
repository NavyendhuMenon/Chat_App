const User = require("../models/userModel");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const validPassword = await bcryptjs.compare(password, validUser.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Password!"});
    }

    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // res.cookie('access_token', token, { httpOnly: true, maxAge: 3600000 });
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use false in development
      sameSite: "None",  // Required for cross-origin requests
      maxAge: 3600000,   // 1 hour
    });
    
    // console.log(document.cookie);
    
    res.status(200).json({
      message: "Login successfull!",
      user: {
        id: validUser._id, 
        email: validUser.email,
        isAdmin: validUser.isAdmin
      },
      token: token,  
    });

  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};

module.exports = signIn;
