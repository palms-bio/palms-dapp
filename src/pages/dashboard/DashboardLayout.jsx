import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
    return (
        <div className="flex w-full">
            <div className="w-[202px] border-r border-r-[#F5F5F50D] bg-[#081E36] py-5">
                <Sidebar />
            </div>
            <div className="w-full">
                <div>
                    <DashboardNavbar />
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
