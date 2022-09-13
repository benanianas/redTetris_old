const express = require("express");
const path = require("path");
const app = express();
const socketio = require('socket.io');
const server = require('http').createServer(app);

const port = 3000;


app.use(express.static(path.join(__dirname, "../dist")))

server.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})

const io = socketio(server, {});

io.on("connection", (socket) => {
    console.log("a socket User connected!")
});