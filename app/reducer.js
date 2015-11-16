import { setState, SET_STATE } from '../redux/actions'
import { initialState } from '../redux/initial_state'

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_STATE:
    return action.state
  default:
    return state
  }
}
