import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import App from 'components/App';

ReactDom.render(
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <App />
  </Provider>, document.querySelector('#root'))
