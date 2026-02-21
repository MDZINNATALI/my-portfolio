// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import AttendanceLogin from './pages/AttendanceLogin';
import Attendance from './pages/Attendance';

// হোম পেজ কম্পোনেন্ট
const Home = () => (
  <div className="home">
    <section className="skills">
      <h2>আমার দক্ষতা</h2>
      <div className="skills-grid">
        <div className="skill-item">React.js</div>
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">HTML5</div>
        <div className="skill-item">CSS3</div>
        <div className="skill-item">Node.js</div>
        <div className="skill-item">Google Sheets API</div>
      </div>
    </section>
    
    <section className="projects">
      <h2>আমার প্রজেক্ট</h2>
      <div className="project-card">
        <h3>📊 অ্যাটেনডেন্স ট্র্যাকার</h3>
        <p>Google Sheet-ভিত্তিক অ্যাটেনডেন্স সিস্টেম। পাসওয়ার্ড দিয়ে সুরক্ষিত ড্যাশবোর্ড থেকে ডেটা দেখা যায়।</p>
      </div>
      <div className="project-card">
        <h3>🛒 ই-কমার্স সাইট</h3>
        <p>React দিয়ে তৈরি অনলাইন শপ (ডেমো প্রজেক্ট)</p>
      </div>
      <div className="project-card">
        <h3>✅ টো-ডু অ্যাপ</h3>
        <p>টাস্ক ম্যানেজমেন্ট অ্যাপ্লিকেশন</p>
      </div>
    </section>
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>মোঃ জিন্নাত আলী</h1>
          <p className="tagline">ওয়েব ডেভেলপার | React.js স্পেশালিস্ট</p>
          <nav className="nav-menu">
            <Link to="/">হোম</Link>
            <Link to="/attendance">অ্যাটেনডেন্স</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/attendance-login" 
            element={<AttendanceLogin setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/attendance" 
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Attendance />
              </PrivateRoute>
            } 
          />
        </Routes>

        <footer className="footer">
          <p>&copy; 2026 byssc19 All Rights reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;