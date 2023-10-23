const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, User } = require('../db/mongodb.js');
const router = express.Router();

router.use(bodyParser.json());

router.post("/", async (req, res) => {
  const accountID = req.query.id;

  try {
    // Find the user by their _id
    const user = await User.findOne({ _id: accountID });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Extract payment data from the request body

    const subject = req.body.subject;
    const message = req.body.message;
    const newMessage = {
      subject: subject,
      message: message,
    };

    // Add the new payment object to the user's paymentHistory array
    user.supportMessage.push(newMessage);

    // Save the user with the updated paymentHistory
    await user.save();

    res.status(200).json({ message: "Message Sent Success" });
  } catch (error) {
    console.error("Error Sending Message", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;
