import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Components/SignupPage";
import Dashboard from "./Components/DashBoard";
import LoginPage from "./Components/LoginPage";
import UserDashBoardWrapper from "./Components/UserDashBoardWrapper";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Use a wrapper component to pass userId as a prop */}
        <Route path="/user/:userId" element={<UserDashBoardWrapper />} />
        {/* Redirect to Dashboard page if an unknown route is accessed */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
