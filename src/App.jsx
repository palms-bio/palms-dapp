import React from "react";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./pages/ConnectWallet";
import HowItWorks from "./pages/HowItWorks";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/connect" element={<ConnectWallet />} />
                <Route path="/howitworks" element={<HowItWorks />} />
            </Routes>
        </Router>
    );
}

export default App;
