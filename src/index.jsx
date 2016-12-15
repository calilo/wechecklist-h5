import 'weui';
import 'react-weui/lib/react-weui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store.jsx';

import TabPartial from './components/TabPartial.jsx';
import App from './containers/AppContainer.jsx';
import Checklist from './containers/ChecklistContainer.jsx';
import ChecklistDetail from './containers/ChecklistDetailContainer.jsx';
import Mine from './containers/MineContainer.jsx';

import {getChecklist} from './creators/checklist_creator.jsx';
import {loadUserInfo, redirectAuth} from './creators/mine_creator.jsx';

require('./stylesheets/main.scss');


const history = syncHistoryWithStore(hashHistory, store);

(function () {
  let action = loadUserInfo();
  if (!action) {
    redirectAuth();
  } else {
    store.dispatch(action);
  }
})();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TabPartial}>
        <Route path="checklist" component={Checklist} />

        <Route path="friends" component={App}/>
        <Route path="groups" component={App}/>
        <Route path="mine" component={Mine}/>
      </Route>
      <Route path="/checkItem/:id" component={ChecklistDetail} onEnter={(nextState, replaceWith)=>{
        store.dispatch(getChecklist({id:nextState.params.id}));
      }}></Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

let platform = (function detectPlatform() {
  let platform = '';
  if (/iPhone/.test(navigator.userAgent)) {
    platform = 'iphone';
  } else if (/iPad/.test(navigator.userAgent)) {
    platform = 'ipad';
  } else if (/Android/.test(navigator.userAgent)) {
    platform = 'android';
  }
  return platform;
})();

!!platform && (function () {
  let appEl = document.getElementById('app');
  appEl.classList.add(platform);
  appEl.dataset.platform = platform;
})()