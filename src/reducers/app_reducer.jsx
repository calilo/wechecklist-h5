import update from 'react-addons-update';
import consts from '../constants.jsx';

const initialState = {
  chosenMenuItem: undefined
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.APP_CHOSE:
      return update (state, { chosenMenuItem: { $apply: id => action.id } });
    default:
      return state;
  }
};

export default appReducer;