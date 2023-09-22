const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected with socket ID:", socket.id);

  socket.on("from_client", () => {
    console.log("event comming from client");
  });

  setInterval(() => {
    io.emit("from_server", "Hello, clients!");
  }, 100000);
});
app.use("/", express.static(__dirname + "/public"));

server.listen(3000, () => {
  console.log("Server is working on port 3000");
});
