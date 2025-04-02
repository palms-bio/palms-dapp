import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar2 from "./Sidebar2";

const DashboardLayout = () => {
    return (
        <div className="flex w-full font-albertSans">
            <div className="w-[202px] border-r border-r-[#F5F5F50D] bg-[#081E36] py-5">
                <Sidebar />
            </div>
            <div className="w-full">
                <div>
                    <DashboardNavbar />
                </div>
                <div className="flex">
                    <div className="w-full">
                        <Outlet />
                    </div>
                    <div className="w-[30%] border-t border-[#F5F5F50D]">
                        <Sidebar2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
