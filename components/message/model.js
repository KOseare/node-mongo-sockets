const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
  user: String,
  message: String,
  date: Date
});

const model = mongoose.model('Message', mySchema);

module.exports = model;
