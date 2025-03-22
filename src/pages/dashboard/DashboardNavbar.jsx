import { Search } from "lucide-react";
import React from "react";

const DashboardNavbar = () => {
    return (
        <nav className="border-b border-b-[#F5F5F50D] flex justify-end py-4 px-6 items-center space-x-4">
            <div>
                <a href="/"> Products</a>
            </div>
            <div>
                <a href="/"> NFT</a>
            </div>
            <div>
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
        </nav>
    );
};

export default DashboardNavbar;
