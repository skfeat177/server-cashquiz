const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, User } = require('../db/mongodb.js');

const router = express.Router();

router.use(bodyParser.json());

// Route to handle login
router.post("/", async (req, res) => {
  const password = req.body.password;
  const username = req.body.username;
  const number = req.body.number;
  
  try {
    const user = await User.findOne({
      $or: [
        { $and: [{ username: username }, { password: password }] },
        { $and: [{ number: number }, { password: password }] }
      ]
    });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Login successful",accountID:user._id,totalPoint:user.totalPoints });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Failed to login" });
  }
});

module.exports = router;
