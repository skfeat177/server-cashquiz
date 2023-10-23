const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, User } = require('../db/mongodb.js');
const router = express.Router();

router.use(bodyParser.json());

// Route to add a new User
router.post("/", async (req, res) => {
  try {
    const name = req.body.name; 
    const number = req.body.number; 
    const password = req.body.password; 
    const username = req.body.username; 

    const newUser = new User({
      name: name,
      number:number,
      password: password,
      username: username, 
    });

    await newUser.save();

    res.status(200).json({ message: "User added successfully", data: newUser });
  } catch (error) {
    console.error("Error adding User:", error);
    res.status(500).json({ message: "Failed to add User" });
  }
});

module.exports = router;
