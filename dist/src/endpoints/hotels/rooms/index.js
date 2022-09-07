"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const integrations_1 = __importDefault(require("../../../integrations"));
const router = (0, express_1.Router)();
const provider = (0, integrations_1.default)();
function getRooms(query, subscriberId, socket) {
    process.nextTick(() => {
        const rooms = provider.getRooms(query);
        // TODO: Might change to map
        rooms.forEach((rooms) => {
            try {
                rooms.then(res => {
                    const rooms = provider.rooms(res.data);
                    rooms && socket.to(subscriberId).emit('search', rooms);
                }).catch(err => console.error(err));
            }
            catch (err) {
                console.error(err);
            }
        });
    });
}
router.post('/', (req, res) => {
    try {
        console.log(req.body);
        if (!req.body.subscriberId)
            throw new Error('No subscriber to emit to');
        const { query, subscriberId } = req.body;
        getRooms(query, subscriberId, req.app.io);
        res.send({ ok: true });
    }
    catch (err) {
        console.log(err);
        res.status(400).send(`An error occured: ${err}`);
    }
});
exports.default = router;
