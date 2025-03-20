import React from "react";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./pages/ConnectWallet";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/connect" element={<ConnectWallet />} />
            </Routes>
        </Router>
    );
}

export default App;
