import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the default export from App
import './index.css';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootDOM = ReactDOM.createRoot(root);
rootDOM.render(rootElement);
