"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const sockets_1 = __importDefault(require("./sockets"));
const metadata_1 = __importDefault(require("./endpoints/metadata"));
const hotels_1 = __importDefault(require("./endpoints/hotels"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/healthcheck', (_, res) => res.send({ ok: true }));
app.use('/api/metadata', metadata_1.default);
app.use('/api/hotels', hotels_1.default);
const server = (0, http_1.createServer)(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });
(0, sockets_1.default)(io, app);
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
