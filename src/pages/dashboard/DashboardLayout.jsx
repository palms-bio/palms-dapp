import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./dashboard-ui/DashboardNavbar";
import Sidebar2 from "./Sidebar2";

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleRightSidebar = () => {
        setRightSidebarOpen(!rightSidebarOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row w-full font-albertSans min-h-screen">
            {/* Mobile sidebar toggle button */}
            <button 
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#081E36] rounded-full shadow-lg"
                onClick={toggleSidebar}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile sidebar */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
                <div className="absolute top-0 left-0 bottom-0 w-64 bg-[#081E36] py-5 overflow-y-auto">
                    <div className="flex justify-end p-2">
                        <button onClick={toggleSidebar} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <Sidebar />
                </div>
            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:block w-[202px] border-r border-r-[#F5F5F50D] bg-[#081E36] py-5 flex-shrink-0">
                <Sidebar />
            </div>

            {/* Main content */}
            <div className="w-full flex-grow">
                <div>
                    <DashboardNavbar />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:flex-1">
                        <Outlet />
                    </div>

                    {/* Mobile right sidebar toggle button */}
                    <button 
                        className="lg:hidden fixed bottom-4 right-4 z-50 p-2 bg-[#081E36] rounded-full shadow-lg"
                        onClick={toggleRightSidebar}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Mobile right sidebar */}
                    <div className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleRightSidebar}></div>
                        <div className="absolute top-0 right-0 bottom-0 w-64 bg-[#081E36] py-5 overflow-y-auto border-t border-[#F5F5F50D]">
                            <div className="flex justify-start p-2">
                                <button onClick={toggleRightSidebar} className="text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <Sidebar2 />
                        </div>
                    </div>

                    {/* Desktop right sidebar */}
                    <div className="hidden lg:block w-[30%] border-t lg:border-l border-[#F5F5F50D] flex-shrink-0">
                        <Sidebar2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
