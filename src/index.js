import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from './style/Global';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
