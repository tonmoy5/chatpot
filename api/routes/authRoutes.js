const express = require('express');
const router = express.Router();

const authController = require("../controllers/authController")

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
router.post('/register', authController.register);

/**
 * @description Login an existing user
 * @route POST /api/auth/login
 * @access Public
 * @params {string} email - The user's email
 * @params {string} password - The user's password
 * @return {json} - Status and JSON { success:true, data:{}, message:string }
 */
router.post('/login', authController.login);

module.exports = router;
