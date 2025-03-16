import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="gradient-bg text-white p-16">
            <div className="flex justify-end space-x-24">
                {/* Brand Section */}

                {/* Quick Links */}
                <div>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="#products"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#how-it-works"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Support
                            </a>
                        </li>
                        <li>
                            <a
                                href="#blockchain"
                                className="text-white hover:text-primary transition-colors"
                            >
                                How it works
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="#products"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Blockchain
                            </a>
                        </li>
                        <li>
                            <a
                                href="#how-it-works"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Gas
                            </a>
                        </li>
                        <li>
                            <a
                                href="#blockchain"
                                className="text-white hover:text-primary transition-colors"
                            >
                                Starknet
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="inline-block bg-[#07192C] w-[150px] h-[50px] text-white rounded-xl border border-white">
                        Order Now
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div>
                    <h3 className="font-aldrich text-2xl mb-2">PALMS</h3>
                    <p className="font-plusJakartaSans text-gray-400 mb-6">
                        Bio Energy
                    </p>
                </div>
                <div className="flex space-x-4 ">
                    <a
                        href="#how-it-works"
                        className="text-white hover:text-primary transition-colors inline-block"
                    >
                        Privacy
                    </a>
                    <a
                        href="#how-it-works"
                        className="text-white hover:text-primary transition-colors inline-block"
                    >
                        Terms
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
