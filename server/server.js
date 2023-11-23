import http from 'http';
import {Server as SocketIOServer} from 'socket.io';

import app from "./app.js";

const port = process.env.PORT || 4300;

const server = http.createServer(app);
const io = new SocketIOServer(server);


server.listen(port, '0.0.0.0', () => {
    console.log(`---- Server running on port [${port}]----`);
});

io.on('connection', async (socket) => {
    socket.on('send_item', async () => {
        io.emit('handler_send_item');
    });
});

