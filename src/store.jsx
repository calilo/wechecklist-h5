import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { hashHistory } from "react-router";
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/app_reducer.jsx';
import checklistReducer from './reducers/checklist_reducer.jsx';
import mineReducer from './reducers/mine_reducer.jsx';

const middleware = routerMiddleware(hashHistory);

const store = createStore(
  combineReducers({
    routing: routerReducer,
    app: appReducer,
    checklist: checklistReducer,
    mine: mineReducer
  }),
  compose(applyMiddleware(middleware, thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;