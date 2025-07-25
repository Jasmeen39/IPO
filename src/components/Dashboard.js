import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="cards">
        {/* IPO Dashboard India Card */}
        <div className="card">
          <h3>IPO Dashboard India</h3>
          <div className="ipo-gain-text">+ 20 IPO in Gain</div>
          
          <div className="chart-container">
            <svg className="donut-chart" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke="#f0f0f0" 
                strokeWidth="12"
              />
              
              {/* Loss segment - purple */}
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke="#9f7aea" 
                strokeWidth="12"
                strokeDasharray="84.8 197.2"
                strokeDashoffset="0"
                transform="rotate(-90 60 60)"
              />
              
              {/* Gain segment - teal */}
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke="#4fd1c7" 
                strokeWidth="12"
                strokeDasharray="188.5 93.5"
                strokeDashoffset="-84.8"
                transform="rotate(-90 60 60)"
              />
              
              {/* Ongoing segment - orange */}
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke="#f6ad55" 
                strokeWidth="12"
                strokeDasharray="18.8 263.2"
                strokeDashoffset="-273.3"
                transform="rotate(-90 60 60)"
              />
            </svg>
            
            <div className="chart-center">
              <div className="total">30</div>
              <div className="label">Total IPO</div>
            </div>
          </div>

          <div className="stats-bottom">
            <div className="stat upcoming">
              <div className="number">9</div>
              <div className="label">IPO in Loss</div>
            </div>
            <div className="stat listed">
              <div className="number">20</div>
              <div className="label">IPO in Gain</div>
            </div>
            <div className="stat ongoing">
              <div className="number">2</div>
              <div className="label">Ongoing</div>
            </div>
          </div>
        </div>

        {/* Quick Links Card */}
        <div className="card">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li>
              <div className="link-left">
                <div className="link-icon nse">NSE</div>
                <span className="link-name">NSE India</span>
              </div>
              <button className="visit-btn">Visit Now</button>
            </li>
            <li>
              <div className="link-left">
                <div className="link-icon bse">BSE</div>
                <span className="link-name">BSE India</span>
              </div>
              <button className="visit-btn">Visit Now</button>
            </li>
            <li>
              <div className="link-left">
                <div className="link-icon sebi">SEBI</div>
                <span className="link-name">SEBI</span>
              </div>
              <button className="visit-btn">Visit Now</button>
            </li>
            <li>
              <div className="link-left">
                <div className="link-icon money-control">MC</div>
                <span className="link-name">Money Control</span>
              </div>
              <button className="visit-btn">Visit Now</button>
            </li>
          </ul>
        </div>

        {/* Main Board IPO Card */}
        <div className="card">
          <h3>Main Board IPO</h3>
          <button className="view-report">View Report</button>
          <div className="date-subtitle">From 01 Jan 2024</div>
          
          <div className="main-chart">
            <div className="pie-chart"></div>
          </div>
          
          <div className="legend">
            <div className="legend-item upcoming">
              <div className="dot"></div>
              <div>Upcoming</div>
              <span className="count">15</span>
            </div>
            <div className="legend-item listed">
              <div className="dot"></div>
              <div>New Listed</div>
              <span className="count">25</span>
            </div>
            <div className="legend-item ongoing">
              <div className="dot"></div>
              <div>Ongoing</div>
              <span className="count">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

