import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CartItems from './components/cartItems';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const store = createStore(rootReducer);

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={CartItems} />
        </div>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
