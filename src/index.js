import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";


import './index.css';
import App from './App';
import { RoomProvider } from "./Context";


ReactDOM.render(
  <RoomProvider>
    <Router>
    <App />
  </Router>
  </RoomProvider>,
   

  document.getElementById('root')
);
