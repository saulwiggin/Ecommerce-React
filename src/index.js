import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { getCartProducts } from 'reducers/index.js';
import { addToCart } from './actions';

import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

function counter(state = 0, action) {
   switch (action.type) {
     case 'INCREMENT':
       return state + 1
     case 'DECREMENT':
       return state - 1
     default:
       return state
   }
 }

 let store = createStore(counter, window.STATE_FROM_SERVER)

 console.log(store.getState())
 store.dispatch(counter('INCREMENT'))
 store.dispatch(counter('INCREMENT'))
 store.dispatch(counter('INCREMENT'))
 console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>
, document.getElementById("root"));

export default connect()(Switch)
