import React, { useState } from "react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="flex flex-col">
            <nav className="bg-[#07192C] flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 fixed w-full top-0 z-50">
                <div className="flex items-center">
                    <a className="font-aldrich" href="/">
                        <span className="text-[24px] md:text-[28px] lg:text-[32px] text-white">PALMS</span>
                        <br />
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] text-[#6C6C6C] font-plusJakartaSans">
                            Bio Energy
                        </span>
                    </a>
                </div>
                
                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="text-white p-2"
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                
                {/* Desktop menu */}
                <div className="hidden lg:flex space-x-6 xl:space-x-12 items-center">
                    <a
                        href="/getdigester"
                        className="text-white text-base xl:text-lg font-plusJakartaSans hover:text-[#31C61D]"
                    >
                        Products
                    </a>
                    <a
                        href="/connect"
                        className="text-white text-base xl:text-lg font-plusJakartaSans hover:text-[#31C61D]"
                    >
                        Blockchain
                    </a>
                    <a
                        href="/how-it-works"
                        className="text-white text-base xl:text-lg font-plusJakartaSans hover:text-[#31C61D]"
                    >
                        How it works
                    </a>
                    <a
                        href="/signup"
                        className="flex justify-center items-center w-[120px] xl:w-[150px] h-[45px] xl:h-[50px] gradient-bg text-white font-plusJakartaSans text-base xl:text-lg rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Get Started
                    </a>
                </div>
            </nav>
            
            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
                <div className="fixed top-[85px] left-0 right-0 bg-[#07192C] z-40 lg:hidden border-t border-[#F5F5F50D] border-b-[3px] border-b-primary">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        <a
                            href="/getdigester"
                            className="text-white text-lg font-plusJakartaSans hover:text-[#31C61D] w-full text-center py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Products
                        </a>
                        <a
                            href="/connect"
                            className="text-white text-lg font-plusJakartaSans hover:text-[#31C61D] w-full text-center py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blockchain
                        </a>
                        <a
                            href="/how-it-works"
                            className="text-white text-lg font-plusJakartaSans hover:text-[#31C61D] w-full text-center py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How it works
                        </a>
                        <a
                            href="/signup"
                            className="flex justify-center items-center w-[150px] h-[50px] gradient-bg text-white font-plusJakartaSans text-lg rounded-lg hover:opacity-90 transition-opacity my-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
            
            <div className="w-full h-[3px] gradient-bg"></div>
        </div>
    );
};

export default Navbar;
