import React from 'react';  // This is needed if you're using React < 17
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/LoginPage.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);