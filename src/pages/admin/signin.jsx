import React, { useState } from "react";
import '../../styles/style.css';
import logo from '../../assets/logo.jpeg';

export default function Signin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        isHuman: false,
        keepSignedIn: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.isHuman) {
            alert("Please verify you are not a robot.");
            return;
        }
        // For now, just log the form data
        console.log("Form Submitted:", formData);
        alert("Login successful");
    };

    return (
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="Bluestock Logo" className="logo-image" />
                <span className="logo-text">BLUESTOCK</span>
            </div>

            
            <form onSubmit={handleSubmit} className="form">
                <div className="field-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    required
                />
                </div>
                <div className="field-group">
                    <label>Password</label>
                    <a href="#" className="forgot-link">Forgot Password?</a>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input"
                    required
                />
                
                </div>
                <label className="checkboxLabel">
                    <input
                        type="checkbox"
                        name="isHuman"
                        checked={formData.isHuman}
                        onChange={handleChange}
                    />{" "}
                    I'm not a robot
                </label>
                <label className="checkbox-keep">
          <input
            type="checkbox"
            name="keepSignedIn"
            checked={formData.keepSignedIn}
            onChange={handleChange}
          />
          Keep me signed in
        </label>
                <button type="submit" className="button">
                    Login
                </button>
                <div className="divider">or sign in with</div>
                <button type="button" className="googleButton">
                    Continue with Google
                </button>
            </form>
                <a href="/admin/signup" className="link">
                   Create an account
                </a>
            
        </div>
    );
}

