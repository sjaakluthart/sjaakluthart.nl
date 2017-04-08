/* eslint react/jsx-filename-extension: [0] */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './css/meyer-reset.css';
import './css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
