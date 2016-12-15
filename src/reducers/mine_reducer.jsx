import update from 'react-addons-update';
import { $iArrayMerge } from '../utils/array-utils.js';
import consts from '../constants.jsx';

const initialState = {
  userId: 0,
  headUrl: '',
  name: '',
  friendCount: 0
}

const mineReducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.MINE_DATA:
      return action.data;
    default:
      return state;
  }
};

export default mineReducer;