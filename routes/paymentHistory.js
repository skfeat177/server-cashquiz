const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, User } = require('../db/mongodb.js');

const router = express.Router();

router.use(bodyParser.json());

// Route to retrieve payment history for a user
router.get("/", async (req, res) => {
  const accountID = req.query.id;
  try {
    const user = await User.findOne({ _id: accountID });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    
 
    res.status(200).json(user.paymentHistory);
  } catch (error) {
    console.error("Error retrieving payment history:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
