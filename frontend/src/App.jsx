import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/HomePage';
import CallbackPage from './pages/CallbackPage';
import UserStatsPage from './pages/UserStatsPage';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="/userstats" element={<UserStatsPage />} />
        </Routes>
      </BrowserRouter>
    );
}