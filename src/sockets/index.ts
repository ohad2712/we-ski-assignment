import { Request } from 'express';

export default (io, app) => {
  io.of();

  io.on('connection', socket => {
      console.log(`A new search subscriber: ${socket.id}`);

      socket.on('disconnect', () => {
          console.log(`A client is leaving the session: ${socket.id}`)
          socket.leave(socket.id);
      });

      socket.on('error', () => {
          socket.emit('Error', 'Failed to connect');
      });
  });

  app.use((req: Request, res, next: Function) => {
      (req.app as any).io = io;
      
      return next();
  });
}


