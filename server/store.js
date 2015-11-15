import { createStore } from 'redux';
import reducer from '../redux/reducer';

export default function makeStore() {
  return createStore(reducer);
}
