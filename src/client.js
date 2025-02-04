import App from './client/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import store from "./client/store/store"

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
