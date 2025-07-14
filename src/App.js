import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/admin/signup";
import Login from "./pages/admin/signin";
// import other pages if needed
// import Login from "./pages/admin/login";
// import Dashboard from "./pages/admin/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/signup" element={<Register />} />
        <Route path="/admin/signin" element={<Login />} />
        {/* Other routes */}
        {/* <Route path="/admin/login" element={<Login />} /> */}
        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
