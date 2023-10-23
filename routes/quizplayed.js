const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, User } = require('../db/mongodb.js');

const router = express.Router();

router.use(bodyParser.json());
// Route to update currentPoints, totalPoints, and quizPlayed for a user
router.put("/", async (req, res) => {
  const accountID = req.query.id;

  try {
    const user = await User.findOne({ _id: accountID });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // Increment quizPlayed by 1
    user.quizPlayed = (user.quizPlayed || 0) + 1;

    // Save the updated user
    await user.save();

    res.status(200).json({
      message: "Points and quizPlayed updated successfully",
      quizPlayed: user.quizPlayed,
    });
  } catch (error) {
    console.error("Error updating points and quizPlayed:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
