const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }))
const server = createServer(app);
const io = new Server(server, { cors: 'http://localhost:3000' });


io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(5000, () => {
    console.log('server running at http://localhost:5000');
});