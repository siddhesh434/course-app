import './NavBar.css';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const redirectToSignup = () => {
        navigate('/signup'); // Replace '/signup' with the actual route of your signup page
    };

    const redirectToLogin = () => {
        navigate('/login'); // Replace '/signup' with the actual route of your signup page
    };
    const redirectToHome = () => {
        navigate('/dashboard'); // Replace '/signup' with the actual route of your signup page
    };

    return (
        <div>
            <nav>
                <div className="NavBar">
                    <div className="leftSection">
                        <span className="brandName">Coursera</span>
                    </div>
                    <div className="rightSection">
                        <button className="btn" onClick={redirectToHome}>Home</button>
                        <button className="btn" onClick={redirectToSignup}>Sign-up</button>
                        <button className="btn" onClick={redirectToLogin}>Login</button>

                    </div>
                </div>
            </nav>
        </div>
    );
}
