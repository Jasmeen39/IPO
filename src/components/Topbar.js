import React from "react";

export default function Topbar() {
  return (
    <div className="topbar">
      <input type="text" placeholder="Search" className="search-input" />
      <div>
        <span>🔔</span>
        <span>Hi, Jasmeen</span>
        <img
          src="https://via.placeholder.com/32/667eea/ffffff?text=V"
          alt="avatar"
          style={{borderRadius: "50%"}}
        />
      </div>
    </div>
  );
}