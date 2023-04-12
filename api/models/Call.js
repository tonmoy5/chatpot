const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
  caller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  chat_room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatRoom',
    required: true
  },
  start_time: {
    type: Date,
    required: true
  },
  duration: {
    type: Number
  },
  end_time: {
    type: Date
  },
  status: {
    type: String,
    enum: ['missed', 'completed', 'declined', 'failed'],
    default: 'missed'
  }
}, {
  timestamps: true
});

const Call = mongoose.model('Call', callSchema);

module.exports = Call;
