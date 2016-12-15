import update from 'react-addons-update';
import { $iArrayMerge } from '../utils/array-utils.js';
import consts from '../constants.jsx';

const initialState = {
  checklists: [],
  _len: 0,
  _nextStart: 0,
  _isLoading: false,
  chosen: {
    id: 0,
    author: '',
    title: '',
    description: '',
    pictures: []
  }
}

const checklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.CHECKLIST_DATA:
      return update (state, { checklists: { $apply: p => $iArrayMerge(p, action.data.list) }, _len: { $set: action.data._len }, _nextStart: { $set: action.data.start + action.data.list.length }, _isLoading: { $set: false } });
    case consts.CHECKLIST_FETCH:
      return update (state, { _isLoading: { $set: true } });
    case consts.CHECKLIST_FETCH_END:
      return update (state, { _isLoading: { $set: false } });
    case consts.CHECKLIST_ITEM_DATA:
      return update (state, { chosen: { $set: action.data } });
    case consts.CHECKLIST_ITEM_FINISH:
      {
        let idx_change = -1;
        let item_change = state.checklists.find(function (item, index) {
          if (item.id == action.id) {
            idx_change = index;
            return true;
          }
        });
        if (idx_change != -1) {
          state.checklists[idx_change] = update (item_change, { status: { $set: consts.CHECKLIST_STATUS.DONE } });
        }
        return state;
      }
    default:
      return state;
  }
};

export default checklistReducer;