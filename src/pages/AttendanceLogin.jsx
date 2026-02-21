// src/pages/AttendanceLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttendanceLogin.css';

const AttendanceLogin = ({ setIsAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // পাসওয়ার্ড চেক করুন (আপনার ইচ্ছামত পরিবর্তন করুন)
    if (password === 'attendance2025') {
      setIsAuthenticated(true);
      navigate('/attendance');
    } else {
      setError('ভুল পাসওয়ার্ড!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>📊 অ্যাটেনডেন্স দেখতে লগইন করুন</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="byssc19"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">প্রবেশ করুন</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AttendanceLogin;