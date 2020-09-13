import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import * as serviceWorker from './scripts/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
