import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="gradient-bg text-white p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row md:justify-end space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16 xl:space-x-24">
                {/* Brand Section for mobile */}
                <div className="block md:hidden">
                    <h3 className="font-aldrich text-2xl mb-2">PALMS</h3>
                    <p className="font-plusJakartaSans text-gray-400 mb-6">
                        Bio Energy
                    </p>
                </div>

                {/* Quick Links */}
                <div className="w-full sm:w-auto">
                    <ul className="space-y-3 md:space-y-4">
                        <li>
                            <Link
                                to="/getdigester"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/howitworks"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/howitworks"
                                className="text-white hover:text-primary transition-colors"
                            >
                                How it works
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-auto">
                    <ul className="space-y-3 md:space-y-4">
                        <li>
                            <Link
                                to="/connect"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Blockchain
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/gas"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Gas
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/connect"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Starknet
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-auto flex justify-center md:justify-start">
                    <Link to="/getdigester" className="inline-block bg-[#07192C] w-[150px] h-[50px] text-white rounded-xl border border-white flex items-center justify-center">
                        Order Now
                    </Link>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 md:mt-4">
                <div className="hidden md:block mb-4 sm:mb-0">
                    <h3 className="font-aldrich text-xl sm:text-2xl mb-2">PALMS</h3>
                    <p className="font-plusJakartaSans text-gray-400">
                        Bio Energy
                    </p>
                </div>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <Link
                        to="/privacy"
                        className="text-white hover:text-primary transition-colors inline-block"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="/terms"
                        className="text-white hover:text-primary transition-colors inline-block"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
