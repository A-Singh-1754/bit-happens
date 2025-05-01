const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const multer = require('multer');

// Image upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST - Add member
router.post('/', upload.single('image'), async (req, res) => {
  const { name, role, email, dob, phone, address, gender, college, degree, department } = req.body;

const newMember = new Member({
  name,
  role,
  email,
  image: req.file.filename,
  dob,
  phone,
  address,
  gender,
  college,
  degree,
  department
});

  await newMember.save();
  res.json(newMember);
});

// GET - All members
router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// GET - Single member by ID
router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
