// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import './index.js'; // Global styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
