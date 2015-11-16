import { SET_STATE } from '../redux/actions'

export default socket => store => next => action => {
  if (action.type !== SET_STATE) {
    socket.emit('action', action)
  }

  return next(action)
}
