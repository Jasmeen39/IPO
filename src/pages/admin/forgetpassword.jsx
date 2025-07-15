import React, { useState } from "react";
import '../../styles/style.css';
import logo from '../../assets/logo.jpeg';

export default function Forgetpassword() {
    const [formData, setFormData] = useState({
        email: "",
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
        // For now, just log the form data
        console.log("Password reset form Submitted:", formData);
        alert("Password Changed");
    };

    return (
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="Bluestock Logo" className="logo-image" />
                <span className="logo-text">BLUESTOCK</span>
            </div>
            
            <label className="field-group label">Forget Password?</label>
            <p>Enter your email address to get the password reset link. </p>
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
                
                
                <button type="submit" className="button">
                    Password reset
                </button>
               <a href="/admin/signin" className="backlogin">Back to login</a>
                
            </form>
                
        </div>
    );
}

