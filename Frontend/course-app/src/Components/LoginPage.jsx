import { useState } from "react";
import './SignupPage.css'
import NavBar from "./NavBar";
export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmedPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Logged In Successfully');

                } else {
                    console.error('Failed to log in.');
                }
                return response.text();
            }).then((data) => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle network errors or exceptions
            });

        console.log("Form submitted:", formData);
        // Add logic to send form data to backend server or perform necessary actions
    };

    return (
        <div><NavBar />
            <div className="signup-form-container">

                <h2>Log in</h2>
                <form action="" onSubmit={handleSubmit}>
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
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>

    );
}