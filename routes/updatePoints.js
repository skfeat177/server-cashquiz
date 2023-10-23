const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, User } = require('../db/mongodb.js');

const router = express.Router();

router.use(bodyParser.json());

// Route to update currentPoints and totalPoints for a user
router.put("/", async (req, res) => {
  const accountID = req.query.id;
  const { currentPoints } = req.body;

  try {
    const user = await User.findOne({ _id: accountID });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // Update currentPoints and totalPoints with values from the request body
    user.currentPoints = currentPoints;

    // Save the updated user
    await user.save();

    res.status(200).json({
      message: "Points updated successfully",
      currentPoints: user.currentPoints,
    });
  } catch (error) {
    console.error("Error updating points:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
