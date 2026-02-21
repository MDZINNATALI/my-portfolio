import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="nav">
        <div className="nav-brand">Zinnat</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="hero">
        <h1>MD. ZINNAT ALI</h1>
        <p className="tagline">Web Developer | React Developer | IoT Enthusiast</p>

        <div className="hero-actions">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn btn-outline" href="#contact">Contact</a>
        </div>
      </header>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">🚀 আমার দক্ষতা</h2>
        <div className="skill-box">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js (Learning)</span>
          <span>ESP32</span>
          <span>IoT Systems</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">💻 আমার প্রজেক্টসমূহ</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Attendance System</h3>
            <p>ESP32 + Fingerprint + Google Sheet based Smart Attendance System.</p>

            <div className="btn-group">
              <a className="project-btn" href="https://example.com" target="_blank" rel="noreferrer">Live Demo</a>
              <a className="project-btn github" href="https://example.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Shop Management System</h3>
            <p>Stock, Sales & Invoice Management using Google Sheets Automation.</p>

            <div className="btn-group">
              <a className="project-btn" href="https://example.com" target="_blank" rel="noreferrer">Live Demo</a>
              <a className="project-btn github" href="https://example.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          {/* Featured */}
          <div className="project-card highlight">
            <div className="badge">FEATURED</div>
            <h3>🌱 Remote Watering System</h3>
            <p>
              IoT based automated watering system using ESP32.
              Control water pump remotely via mobile/web.
            </p>

            <div className="btn-group">
              <a className="project-btn" href="https://example.com" target="_blank" rel="noreferrer">Live Demo</a>
              <a className="project-btn github" href="https://example.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2 className="section-title">📩 Contact</h2>
        <p className="contact-text">কাজ/প্রজেক্ট বা সহযোগিতা করতে চাইলে মেসেজ দাও 👇</p>

        <div className="contact-card">
          <p><b>Email:</b> yourmail@example.com</p>
          <p><b>Facebook:</b> fb.com/yourprofile</p>
          <p><b>GitHub:</b> github.com/yourusername</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 MD. ZINNAT ALI | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;