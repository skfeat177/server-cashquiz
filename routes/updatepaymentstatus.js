const express = require('express');
const bodyParser = require('body-parser');
const { mongoose, User } = require('../db/mongodb.js');

const router = express.Router();


// Route to update the payment status based on transaction ID
router.put("/", async (req, res) => {
  const txnid = req.query.txnid; // Get the transaction ID from the query parameter
  const newStatus = req.query.status; // Get the new status from the request body

  try {
    const user = await User.findOne({ "paymentHistory.transactionID": txnid });
    if (!user) {
      return res.status(401).json({ message: "User not found or transaction ID not found" });
    }

    // Find the payment with the specified transaction ID
    const paymentToUpdate = user.paymentHistory.find((payment) => payment.transactionID === txnid);

    if (!paymentToUpdate) {
      return res.status(404).json({ message: "Transaction ID not found" });
    }

    // Update the status
    paymentToUpdate.status = newStatus;

    // Save the updated user
    await user.save();

    res.status(200).json({
      message: "Payment status updated successfully",
      updatedPayment: paymentToUpdate,
    });
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
