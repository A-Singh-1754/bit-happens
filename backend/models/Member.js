const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  image: String,
  dob: String,
  phone: String,
  address: String,
  gender: String,
  college: String,
  degree: String,
  department: String
});

module.exports = mongoose.model('Member', MemberSchema);
