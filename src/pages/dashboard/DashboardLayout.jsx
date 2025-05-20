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
        <div className="flex  w-full font-albertSans h-screen overflow-hidden">
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
            <div className="hidden lg:block  w-[18%]  border-r border-r-[#F5F5F50D] bg-[#081E36] py-5  overflow-y-auto">
                <Sidebar />
            </div>


            <main className="w-full">
                <header className='w-full'>
                    <DashboardNavbar />
                </header>

                <div className="flex flex-grow ">
                    <section className="flex-1 overflow-y-auto scrollbar-hide">
                        {<Outlet />}
                    </section>
                    <aside className='w-[25%] overflow-y-auto scrollbar-hide'>
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
                        <div className="hidden lg:block w-full border-l border-l-[#F5F5F50D] pt-5 h-[100%]">
                             <Sidebar2 />
                        </div>
   
                        
                    </aside>
                </div>

            </main>
        </div>
    );
};

export default DashboardLayout;
