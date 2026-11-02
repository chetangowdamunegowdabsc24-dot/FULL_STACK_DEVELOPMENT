import React, { useState } from 'react';
import './style.css';
import AuthModule from './components/AuthModule';

export default function App() {
  const [activeRole, setActiveRole] = useState("Student");

  const handlePortalClick = (role) => {
    setActiveRole(role);
    document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Top Navbar */}
      <header className="navbar">
        <div className="nav-brand">
          <div className="rv-badge">RV</div>
          <div className="brand-details">
            <h1>RV UNIVERSITY<sup>&reg;</sup></h1>
            <p>School of Computer Science &amp; Engineering</p>
          </div>
        </div>
        <div className="nav-buttons">
          <button className="btn-nav-login" onClick={() => handlePortalClick("Student")}>Login</button>
          <button className="btn-nav-register" onClick={() => handlePortalClick("Student")}>Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="badge-course">CS3301 - FULL STACK DEVELOPMENT</div>
        <h2>CAMPUS CONNECT PORTAL</h2>
        <p>Connecting Students, Faculty, and Administrators on a Single Digital Platform.</p>
        <button 
          className="btn-explore" 
          onClick={() => document.getElementById('portals')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore User Portals &rarr;
        </button>
      </section>

      {/* Highlights Carousel Section */}
      <section className="highlights-container">
        <h3>Campus Life &amp; Portal Highlights</h3>
        <p>Experience academic management simplified through modern technology.</p>
        
        <div className="carousel-card">
          <div className="carousel-body">
            <button className="carousel-arrow left">&lt;</button>
            <span style={{ color: '#475569', fontWeight: '500' }}>University Campus</span>
            <button className="carousel-arrow right">&gt;</button>
          </div>
          <div className="carousel-footer">
            Modern University Infrastructure
          </div>
        </div>

        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Choose Your Portal View Cards */}
      <section className="portals-section" id="portals">
        <h3 className="portals-title">Choose Your Portal View</h3>

        <div className="portals-grid">
          {/* Student Portal */}
          <div className="portal-box student">
            <div>
              <div className="portal-header">
                <div className="portal-icon">🎓</div>
                <h4>Student Portal</h4>
              </div>
              <ul>
                <li>View Notices &amp; Events</li>
                <li>Submit Assignments</li>
                <li>Track Attendance</li>
                <li>Update Profile</li>
              </ul>
            </div>
            <button className="btn-portal green" onClick={() => handlePortalClick("Student")}>
              Access Student View
            </button>
          </div>

          {/* Faculty Portal */}
          <div className="portal-box faculty">
            <div>
              <div className="portal-header">
                <div className="portal-icon">👨‍🏫</div>
                <h4>Faculty Portal</h4>
              </div>
              <ul>
                <li>Post Notices &amp; Events</li>
                <li>Create Assignments</li>
                <li>Mark Attendance</li>
                <li>View Submissions</li>
              </ul>
            </div>
            <button className="btn-portal blue" onClick={() => handlePortalClick("Faculty")}>
              Access Faculty View
            </button>
          </div>

          {/* Admin Portal */}
          <div className="portal-box admin">
            <div>
              <div className="portal-header">
                <div className="portal-icon">🛡️</div>
                <h4>Admin Portal</h4>
              </div>
              <ul>
                <li>Manage Users</li>
                <li>Manage Notices &amp; Events</li>
                <li>View System Reports</li>
                <li>System Settings</li>
              </ul>
            </div>
            <button className="btn-portal purple" onClick={() => handlePortalClick("Admin")}>
              Access Admin View
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Login Box at Bottom */}
      <AuthModule role={activeRole} />
    </div>
  );
}