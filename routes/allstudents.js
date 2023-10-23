const express = require('express');
const { mongoose, User} = require('../db/mongodb.js');
const router = express.Router();

async function getAllUser() {
  try {
    const allUsers = await User.find();
    return allUsers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

router.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUser();
    res.json(allUsers);
  } catch (error) {
    console.error("Error handling the request:", error);
    res.status(500).json({ error: "Error handling the request" });
  }
});

module.exports = router;
