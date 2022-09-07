import { Router } from 'express';
import providers from '../../../integrations';

const router = Router();

const provider = providers();

function getRooms(query, subscriberId, socket) {
  process.nextTick(() => {
    
    const rooms = provider.getRooms(query);

    // TODO: Might change to map
    rooms.forEach((rooms) => {
      try {
        rooms.then(res => {
          const rooms  = provider.rooms(res.data);
          rooms && socket.to(subscriberId).emit('search', rooms);
        }).catch(err => console.error(err));
      } catch (err) {
        console.error(err);
      }
    })
  })
}

router.post('/', (req, res) => {
  try {
    console.log(req.body);
    
    if (!req.body.subscriberId) throw new Error('No subscriber to emit to');

    const { query, subscriberId } = req.body
    getRooms(query, subscriberId, (req.app as any).io);

    res.send({ ok: true });
  } catch (err) {
    console.log(err);
    
    res.status(400).send(`An error occured: ${err}`);
  }
});

export default router;
