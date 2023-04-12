// external imports
const express = require("express");
const http = require("http");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Server } = require("socket.io");
require("dotenv").config();

// internal imports

// express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongodbUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/chatpot";

// Set up MongoDB connection
mongoose
  .connect(mongodbUri, { useNewUrlParser: true })
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((err) => {
    console.log("DB Connection error: ", err);
  });

// Set up routes
// app.use('/users', userRoutes);
// app.use('/chat_rooms', chatRoomRoutes);
// app.use('/messages', messageRoutes);
// app.use('/calls', callRoutes);
// app.use('/files', fileRoutes);

// deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("ChatPot app is running");
  });
}

// socket io server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:8800"], // development
    // origin: "", // deployment
    methods: ["GET", "POST"],
  },
});

global.io = io;

io.on("connection", (socket) => {
  console.log(`User Connected for chat: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

// Start server
const port = process.env.PORT || 8800;

server.listen(port, () => {
  console.log("Api server started on port ", port, "...!");
});
