import 'whatwg-fetch';
import 'url-search-params-polyfill';
import consts from '../constants.jsx';
import store from '../store.jsx';
import { push } from "react-router-redux";

export function fetchChecklists({start=0, size = 30}) {
  return (dispatch) => {
    dispatch({ type: consts.CHECKLIST_FETCH });
    let p = new URLSearchParams();
    p.append('start', start);
    p.append('size', size);
    console.info({start,size});
    fetch('/api/checklist/getMyChecklists?' + p, {
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        data.start = start;
        return dispatch({ type: consts.CHECKLIST_DATA, data });
      }, function () {
        return dispatch({ type: consts.CHECKLIST_FETCH_END });
      });
  };
}

export function getChecklist({id = 0}) {
  return (dispatch) => {
    let p = new URLSearchParams();
    p.append('id', id);
    fetch('/api/checklist/getChecklist?' + p, {
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        return dispatch({ type: consts.CHECKLIST_ITEM_DATA, data });
      })
  }
}

export function finishChecklist({id=0}) {
  return (dispatch) => {
    fetch('/api/checklist/finishChecklist', {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id})
    }).then((response) => response.json())
      .then((data) => {
        dispatch({ type: consts.CHECKLIST_ITEM_FINISH, id });
        store.dispatch(push('checklist'));
      });
  };
}

export function gotoChecklist() {
  return (dispatch) => {
    store.dispatch(push('checklist'));
  }
}

