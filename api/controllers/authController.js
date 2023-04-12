const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * @description Register a new user
 * @route POST /api/auth/register
 * @access Public
 * @params {string} first_name - The user's first name
 * @params {string} last_name - The user's last name
 * @params {string} email - The user's email
 * @params {string} password - The user's password
 * @params {string} [phone_number] - The user's phone number (optional)
 * @params {string} [gender] - The user's gender (optional)
 * @return {json} - Status and JSON { success:true, data:{}, message:string }
 */

exports.register = async (req, res)=> {
  try {
    const { first_name, last_name, email, password, phone_number, gender } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phone_number,
      gender
    });

    // Save new user to database
    await newUser.save();

    // Create and sign JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    res.status(201).json({ success: true, data: { token, user: newUser }, message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error });
  }
};

/**
 * @description Login an existing user
 * @route POST /api/auth/login
 * @access Public
 * @params {string} email - The user's email
 * @params {string} password - The user's password
 * @return {json} - Status and JSON { success:true, data:{}, message:string }
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Create and sign JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ success: true, data: { token, user }, message: 'User logged in successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

