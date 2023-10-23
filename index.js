const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware

const signup = require('./routes/Signup');
const login = require('./routes/Login');
const alldata = require('./routes/allstudents');
const profile = require("./routes/profileinfo");
const payment = require("./routes/requestPayment");
const paymentHistory = require("./routes/paymentHistory");
const getPoints = require("./routes/getPoints");
const updatePoints = require("./routes/updatePoints");
const quizplayed = require("./routes/quizplayed");
const updatepayment= require("./routes/updatepaymentstatus");
const contactmail= require("./routes/contactmail");
const supportMessage = require("./routes/supportmessage")


app.use(cors()); // Enable CORS for all routes

app.use("/signup", signup);
app.use("/login", login);
app.use("/alluser", alldata);
app.use("/profile", profile);
app.use("/payment", payment);
app.use("/paymenthistory", paymentHistory);
app.use("/getpoints", getPoints);
app.use("/updatepoints", updatePoints);
app.use("/quizplayed", quizplayed);
app.use("/updatepaymentstatus", updatepayment);
app.use("/contactmail", contactmail);
app.use("/supportmessage", supportMessage);



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
