import { useState } from "react";
import './SignupPage.css'
import { useNavigate } from "react-router-dom"; // Import Navigate for redirects
import NavBar from "./NavBar";
export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmedPassword: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi");

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Form data sent successfully!');
                    navigate('/dashboard');
                    // Add logic for successful form submission
                } else {
                    console.error('Failed to send form data.');
                    // Handle error scenarios
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle network errors or exceptions
            });
    };




    return (
        <div><NavBar />
            <div className="signup-form-container">

                <h2>Sign up</h2>
                <form >
                    <div className="form-group">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmedPassword"
                                value={formData.confirmedPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <p>{formData.password}</p>
                    <p>{formData.email}</p>
                    <p>{formData.confirmedPassword}</p>
                    <button type="submit" onClick={handleSubmit} >Sign Up</button>
                </form>
            </div>
        </div>

    );
}