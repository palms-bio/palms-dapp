import { Search, Menu } from "lucide-react";
import React, { useState } from "react";

const DashboardNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="border-b border-b-[#F5F5F50D] flex flex-wrap justify-between md:justify-end py-3 px-4 sm:px-6 items-center">
            {/* Mobile menu toggle */}
            <button 
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <Menu size={24} />
            </button>

            {/* Desktop and Mobile menu items */}
            <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 items-start md:items-center`}>
                <div>
                    <a href="/" className="block py-1"> Products</a>
                </div>
                <div>
                    <a href="/" className="block py-1"> NFT</a>
                </div>
                <div className="w-full md:w-auto">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            name="search"
                            className="w-full py-2 pl-10 pr-4 text-sm bg-[#F5F5F50D] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className="flex space-x-3 items-center">
                    <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="4" cy="4" r="4" fill="#31C61D" />
                    </svg>{" "}
                    <span>Connected</span>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
