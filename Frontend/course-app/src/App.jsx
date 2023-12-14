import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignupPage";
import Dashboard from "./Components/DashBoard";
import { Navigate } from "react-router-dom"; // Import Navigate for redirects
import LoginPage from "./Components/LoginPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Redirect to Signup page if unknown route is accessed */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
