import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import GeneralRouter from './Routers/General_Router/general_router';
import ContentPageRoute from './Routers/Content-Page-Router/ContentPageRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <GeneralRouter />
      <ContentPageRoute />
  </Router>
);
reportWebVitals();
