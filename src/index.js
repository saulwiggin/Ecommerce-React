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

let store = createStore(addToCart, window.STATE_FROM_SERVER)

console.log(store.getState())

ReactDOM.render(
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Provider store={store}> <Route path={prop.path} component={prop.component} key={key} /></Provider>;
        })}
      </Switch>
    </Router>
, document.getElementById("root"));

export default connect()(Switch)
