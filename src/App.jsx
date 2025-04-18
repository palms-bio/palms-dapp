import React from "react";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWallet from "./pages/ConnectWallet";
import HowItWorks from "./pages/HowItWorks";
import GetDigester from "./pages/GetDigester";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Marketplace from "./pages/dashboard/Marketplace";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/connect" element={<ConnectWallet />} />
                <Route path="/howitworks" element={<HowItWorks />} />
                <Route path="/getdigester" element={<GetDigester />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="marketplace" element={<Marketplace />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
