const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const userRoutes = require('./routes/users');
// const chatRoomRoutes = require('./routes/chat_rooms');
// const messageRoutes = require('./routes/messages');
// const callRoutes = require('./routes/calls');
// const fileRoutes = require('./routes/files');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;
// const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/chatpot';

// Set up MongoDB connection
// mongoose.connect('mongodb://localhost/chatpot', { useNewUrlParser: true });
// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB!');
// });

// Set up routes
// app.use('/users', userRoutes);
// app.use('/chat_rooms', chatRoomRoutes);
// app.use('/messages', messageRoutes);
// app.use('/calls', callRoutes);
// app.use('/files', fileRoutes);

// Start server
app.listen(8800, () => {
  console.log('Server started on port 8800!');
});
