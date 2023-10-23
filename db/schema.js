const mongoose = require('mongoose');

// Define the subdocument schema for exam results
const PaymentSchema = new mongoose.Schema({
  transactionID: { type: String },
  Date:{type:Date,default: Date.now},
  method: { type: String },
  amount: { type: Number },
  status: { type: String,default:"Pending" },
});
const MessageSchema = new mongoose.Schema({
  Date:{type:Date,default: Date.now},
  subject: { type: String },
  message: { type: String }
});




// Define the main schema
const UserSchema = new mongoose.Schema({
  name: { type: String },
  number: { type: Number },
  accountCreated:{type:Date,default: Date.now},
  username: { type: String },
  password: { type: String },
  currentPoints: { type: Number,default:0},
  quizPlayed: { type: Number,default:0},
  paymentHistory: { type: [PaymentSchema] },
  supportMessage: { type: [MessageSchema] }
});

// Create the mongoose model
const User = mongoose.model('User', UserSchema);

module.exports = User;
