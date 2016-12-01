
// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import SocketService from './services/socket.js';

SocketService.initialize();

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);
