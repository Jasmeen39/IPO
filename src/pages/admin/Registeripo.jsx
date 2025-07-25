import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Registeripo from "../../components/registeripo";
import "../../App.css";

function App() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <div style={{flex:1, display:"flex", flexDirection:"column"}}>
        <Topbar />
        < Registeripo />
      </div>
    </div>
  );
}

export default App;
