const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, User } = require('../db/mongodb.js');
const router = express.Router();

router.use(bodyParser.json());

router.post("/", async (req, res) => {
  const accountID = req.query.id;


  function generateRandomTransactionID() {
    const prefix = "TXN"; // Static prefix
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Characters for randomness
    const randomLength = 10; // Length of the random part
  
    let randomPart = '';
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * randomChars.length);
      randomPart += randomChars.charAt(randomIndex);
    }
  
    return prefix + randomPart;
  }
  try {
    // Find the user by their _id
    const user = await User.findOne({ _id: accountID });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Extract payment data from the request body
    const transactionID = generateRandomTransactionID();
    const method = req.body.method;
    const amount = req.body.amount;
    // Create a new payment object
    const newPayment = {
      transactionID: transactionID,
      method: method,
      amount: amount,
    };

    // Add the new payment object to the user's paymentHistory array
    user.paymentHistory.push(newPayment);

    // Save the user with the updated paymentHistory
    await user.save();

    res.status(200).json({ message: "Payment added successfully" });
  } catch (error) {
    console.error("Error adding payment:", error);
    res.status(500).json({ message: "Failed to add payment" });
  }
});

module.exports = router;
