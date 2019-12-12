let app = require("express")();
let http = require("http").createServer(app);
let io = require("socket.io")(http);
const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;

// connecting the mongodb

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(err => console.log(err));



io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat message", function(msg) {
    console.log(`Msg: ${JSON.stringify(msg)}`);
    io.emit("chat message", msg);
  });
});

const PORT = 5000;

http.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
