import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  // Emit 'state' to socket.io when Store changes
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    // Feed action event from clients directly into store
    // Should probably put authentication here
    socket.on('action', store.dispatch.bind(store));
  });
}
