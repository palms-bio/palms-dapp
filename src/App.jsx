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
import EnergyAsset from "./pages/dashboard/EnergyAsset";
import Admin from "./pages/dashboard/Admin";
import Rewards from "./pages/dashboard/Rewards";

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
                    <Route path="energy-asset" element={<EnergyAsset />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="rewards" element={<Rewards />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
