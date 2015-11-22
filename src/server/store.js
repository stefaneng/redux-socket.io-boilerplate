import { createStore } from 'redux'
import todoApp from './reducer'

export default function makeStore() {
  return createStore(todoApp)
}
