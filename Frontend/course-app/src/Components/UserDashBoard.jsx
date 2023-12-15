import PropTypes from 'prop-types';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashBoard = ({ userId }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Use the userId received as a prop in the URL for fetching user data
        axios.get(`http://localhost:3000/users/${userId}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]); // Add userId to the dependency array to trigger effect on prop change

    // Use userId in your component logic
    return (
        <div>
            <NavBar />
            <h1>User Dashboard</h1>
            <p>User ID: {userId}</p>
            <div>
                {userData ? (
                    <div>
                        <h2>Welcome, {userData.username}!</h2>
                        <p>Email: {userData.email}</p>
                    </div>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
        </div>
    );
};

UserDashBoard.propTypes = {
    userId: PropTypes.string.isRequired, // Validate the userId prop type
    // Other prop validations if needed
};

export default UserDashBoard;
