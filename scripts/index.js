import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import decisionMaker from './reducers'

let store = createStore(decisionMaker)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
