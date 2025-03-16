import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-col">
            <nav className="bg-[#07192C] flex justify-between items-center px-16 py-6 fixed w-full top-0 z-50">
                <div className="flex items-center">
                    <h1 className="font-aldrich">
                        <span className="text-[32px] text-white">PALMS</span>
                        <br />
                        <span className="text-[20px] text-[#6C6C6C] font-plusJakartaSans">
                            Bio Energy
                        </span>
                    </h1>
                </div>
                <div className="flex space-x-12 items-center">
                    <a
                        href="#products"
                        className="text-white text-lg font-plusJakartaSans hover:text-[#31C61D] "
                    >
                        Products
                    </a>
                    <a
                        href="#blockchain"
                        className="text-white text-lg font-plusJakartaSans hover:text-[#31C61D] "
                    >
                        Blockchain
                    </a>
                    <a
                        href="#how-it-works"
                        className="text-white text-lg font-plusJakartaSans hover:text-[#31C61D] "
                    >
                        How it works
                    </a>
                    <a
                        href="#get-started"
                        className="flex justify-center items-center w-[150px] h-[50px] gradient-bg text-white font-plusJakartaSans text-lg rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Get Started
                    </a>
                </div>
            </nav>
            <div className="w-full h-[3px] gradient-bg"></div>
        </div>
    );
};

export default Navbar;
