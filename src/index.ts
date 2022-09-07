
import express, { Express } from 'express';
import cors from 'cors';
import { createServer } from 'http';

import socket from './sockets';
import metadata from './endpoints/metadata';
import hotels from './endpoints/hotels';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/healthcheck', (_, res) => res.send({ ok: true }));
app.use('/api/metadata', metadata);
app.use('/api/hotels', hotels);

const server = createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

socket(io, app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
