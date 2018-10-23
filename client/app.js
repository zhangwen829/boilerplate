import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import '../public/style.css';

ReactDOM.render(
  <Provider store={store}>
    <div>My Boilermaker</div>
  </Provider>,
  document.getElementById('app')
);