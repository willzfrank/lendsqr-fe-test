import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Login from './page/Login';
import UserDetails from './page/UserDetails';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
