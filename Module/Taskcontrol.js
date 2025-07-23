const mongoose = require("mongoose");
const Sehema = require("../Sehema.js");

const ATITPostmethod = async (req, res) => {
  const {
    fname,
    email,
    phone,
    message,
  } = req.body;
  try {
    const newUser = new Sehema({
        fname,
        email,
        phone,
        message,
    });
    const existingUser = await Sehema.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        status: 200,
        message: "User already exists"
      });
    }
    
    await newUser.save();
    
    return res.status(201).json({
      status: 201,
      message: "User created successfully",
      data: newUser
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
};

const ATITgetMethod = async (req, res) => {
    try {
      const user = await Sehema.find({});
  
      res.status(200).json({
        message: "successfully retrieved",
        data: user
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  



module.exports = {
    ATITPostmethod,
    ATITgetMethod
  };