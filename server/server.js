import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  const items = io.of('/items');
  // Emit 'state' to socket.io when Store changes
  store.subscribe(
    () => items.emit('state', store.getState().toJS())
  );

  items.on('connection', (socket) => {
    console.log("Connected");
    socket.emit('state', store.getState().toJS());
    // Feed action event from clients directly into store
    // Should probably put authentication here
    socket.on('action', store.dispatch.bind(store));
  });
}
