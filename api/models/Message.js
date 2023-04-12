const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  chat_room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatRoom',
    required: true
  },
  text: {
    type: String
  },
  audio: {
    type: String
  },
  video: {
    type: String
  },
  image: {
    type: String
  },
  document: {
    type: String
  }
}, {
  timestamps: true
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
