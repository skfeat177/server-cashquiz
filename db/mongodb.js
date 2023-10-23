// app.js
const { default: mongoose } = require("mongoose");
const User = require('./schema.js');

// Connect to MongoDB
mongoose.connect("mongodb+srv://bravebrowser1775:1775@cluster0.k89xamj.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the `mongoose` object and the `Student` model
module.exports = {
  mongoose,
  User,
};
