import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import ErrorBoundary from './ErrorBoundary.jsx';
import './styles/LoginPage.css';
import './styles/HomePage.css';
import './styles/UserStatsPage.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
