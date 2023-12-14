import './NavBar.css';

export default function NavBar() {
    return (
        <div>
            <nav>
                <div className="NavBar">
                    <div className="leftSection">
                        <span className="brandName">Cousera</span>
                    </div>
                    <div className="rightSection">
                        <button className="btn">Sign-up</button>
                        <button className="btn">Login</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
