import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#07192C] flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Header />
                <Features />
                <HowItWorks />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
