import Server from 'socket.io'

export default function startServer(store) {
  const io = new Server().attach(8090)

  const items = io.of('/todolist')
  // Emit 'state' to socket.io when Store changes
  store.subscribe(
    () => items.emit('state', store.getState())
  )

  items.on('connection', (socket) => {
    socket.emit('state', store.getState())

    // Feed action event from clients directly into store
    // Should probably put authentication here
    socket.on('action', store.dispatch.bind(store))
  })
}
