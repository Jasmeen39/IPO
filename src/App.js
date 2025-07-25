import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/admin/signup";
import Login from "./pages/admin/signin";
import ForgetPassword from "./pages/admin/forgetpassword"
import Dashboard from "./pages/admin/dashboard";
import Upcomingipo from "./pages/admin/upcoming";
import Registeripo from "./pages/admin/Registeripo";
// import other pages if needed
// import Login from "./pages/admin/login";
// import Dashboard from "./pages/admin/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/signup" element={<Register />} />
        <Route path="/admin/signin" element={<Login />} />
        <Route path="/admin/forgetpassword" element={<ForgetPassword />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/manageipo" element={<Upcomingipo />} />
        <Route path="/admin/manageipo/registeripo" element={<Registeripo />} />
        {/* Other routes */}
        {/* <Route path="/admin/login" element={<Login />} /> */}
        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
