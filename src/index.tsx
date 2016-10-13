import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from './store/configure';
import Root from './containers/root';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));