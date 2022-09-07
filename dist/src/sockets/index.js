"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (io, app) => {
    io.of();
    io.on('connection', socket => {
        console.log(`A new search subscriber: ${socket.id}`);
        socket.on('disconnect', () => {
            console.log(`A client is leaving the session: ${socket.id}`);
            socket.leave(socket.id);
        });
        socket.on('error', () => {
            socket.emit('Error', 'Failed to connect');
        });
    });
    app.use((req, res, next) => {
        req.app.io = io;
        return next();
    });
};
