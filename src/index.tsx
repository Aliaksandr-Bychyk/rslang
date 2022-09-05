import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/App';
import './scss/main.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router basename="/rslang">
    <App />
  </Router>,
);
