import React, { useState } from "react";
import '../../styles/style.css';
import logo from '../../assets/logo.jpeg';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        isHuman: false,
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
        alert("Registered successfully!");
    };

    return (
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="Bluestock Logo" className="logo-image" />
                <span className="logo-text">BLUESTOCK</span>
            </div>

            <h3 class="text-3xl text-red">Create an account</h3>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input"
                    required
                />
                <label className="checkboxLabel">
                    <input
                        type="checkbox"
                        name="isHuman"
                        checked={formData.isHuman}
                        onChange={handleChange}
                    />{" "}
                    I'm not a robot
                </label>
                <button type="submit" className="button">
                    Sign up
                </button>
                <div className="divider">or sign up with</div>
                <button type="button" className="googleButton">
                    Continue with Google
                </button>
            </form>
            <p>
                Already have an account?{" "}
                <a href="/admin/login" className="link">
                    Sign in here
                </a>
            </p>
        </div>
    );
}

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "40px auto",
//     padding: "20px",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//   },
//   logo: {
//     fontWeight: "bold",
//     color: "#3B3B98",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   input: {
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "6px",
//   },
//   checkboxLabel: {
//     fontSize: "14px",
//     textAlign: "left",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#6c5ce7",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   googleButton: {
//     padding: "10px",
//     backgroundColor: "#eee",
//     border: "1px solid #ccc",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   divider: {
//     margin: "10px 0",
//     fontSize: "14px",
//     color: "#777",
//   },
//   link: {
//     color: "#6c5ce7",
//     textDecoration: "none",
//   },
// };
