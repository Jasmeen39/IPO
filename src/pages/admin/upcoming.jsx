import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Upcomingipo from "../../components/upcomingipo";
import "../../App.css";

function App() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <div style={{flex:1, display:"flex", flexDirection:"column"}}>
        <Topbar />
        < Upcomingipo />
      </div>
    </div>
  );
}

export default App;
