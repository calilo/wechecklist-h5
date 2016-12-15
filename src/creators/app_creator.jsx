import 'whatwg-fetch';
import consts from '../constants.jsx';
import store from '../store.jsx';

export function choseItem(id) {
  return {
    type: consts.APP_CHOSE,
    id
  }
}

