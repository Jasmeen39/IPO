import React, { useState } from "react";
import { Link } from 'react-router-dom';


export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("Dashboard");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="sidebar">
            <h2>Bluestock Fintech</h2>
            <div style={{ marginBottom: "20px", fontSize: "11px", color: "#a0aec0", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>MENU</div>
            <ul>
                <li>
                    <Link
                        to="/admin/dashboard"
                        className={activeItem === "Dashboard" ? "active" : ""}
                        onClick={() => {
                            handleItemClick("Dashboard");
                        }}
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/manageipo"
                        className={activeItem === "Manage IPO" ? "active" : ""}
                        onClick={() => handleItemClick("Manage IPO")}
                    >
                        Manage IPO
                    </Link>

                </li>
                <li>
                    <a
                        href="#"
                        className={activeItem === "IPO Subscription" ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick("IPO Subscription");
                        }}
                    >
                        IPO Subscription
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeItem === "IPO Allotment" ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick("IPO Allotment");
                        }}
                    >
                        IPO Allotment
                    </a>
                </li>
            </ul>
            <div style={{ marginTop: "30px", marginBottom: "20px", fontSize: "11px", color: "#a0aec0", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>OTHERS</div>
            <ul>
                <li>
                    <a
                        href="#"
                        className={activeItem === "Settings" ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick("Settings");
                        }}
                    >
                        Settings
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeItem === "API Manager" ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick("API Manager");
                        }}
                    >
                        API Manager
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeItem === "Accounts" ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick("Accounts");
                        }}
                    >
                        Accounts
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activeItem === "Help" ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick("Help");
                        }}
                    >
                        Help
                    </a>
                </li>
            </ul>

            <style jsx>{`
        /* Reset and base styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Sidebar */
        .sidebar {
          width: 250px;
          background-color: #f8f9fb;
          padding: 20px;
          border-right: 1px solid #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          min-height: 100vh;
        }

        .sidebar h2 {
          font-size: 16px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 20px;
        }

        .sidebar ul {
          list-style: none;
        }

        .sidebar li {
          margin-bottom: 8px;
        }

        .sidebar a {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          color: #718096;
          text-decoration: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          cursor: pointer;
        }

        .sidebar a:hover {
          background-color: #edf2f7;
          color: #4a5568;
        }

        .sidebar a.active {
          background-color: #667eea;
          color: white;
        }

        .sidebar a::before {
          content: '';
          width: 20px;
          height: 20px;
          background-color: currentColor;
          border-radius: 4px;
          margin-right: 12px;
          opacity: 0.7;
        }
      `}</style>
        </div>
    );
}