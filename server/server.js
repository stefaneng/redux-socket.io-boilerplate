import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  const entries = io.of('/entries');
  // Emit 'state' to socket.io when Store changes
  store.subscribe(
    () => entries.emit('state', store.getState().toJS())
  );

  entries.on('connection', (socket) => {
    console.log("Connected");
    socket.emit('state', store.getState().toJS());
    // Feed action event from clients directly into store
    // Should probably put authentication here
    socket.on('action', store.dispatch.bind(store));
  });
}
