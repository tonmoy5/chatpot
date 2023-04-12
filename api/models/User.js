const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    trim: true,
    default: null
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'other'
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  blocked_user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  chat_room: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatRoom'
  }],
  profile_image: {
    type: String,
    default: 'default.jpg'
  },
  online: {
    type: Boolean,
    default: false
  },
  lastActive: {
    type: Date,
    default: Date.now
  },
  sign_in_method: {
    enum: ['email', 'google', 'facebook']
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
