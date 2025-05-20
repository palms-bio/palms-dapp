import React from "react";
//import AccountCard from "./dashboard-ui/AccountCard";
import NotificationCard from "./dashboard-ui/NotificationCard";
import AccountCard from "./dashboard-ui/AccountCard";

const Sidebar2 = () => {
    return (
        <div className=" w-full pb-12 px-5 pt-5 h-screen">
                <AccountCard />
                <div className="pb-44">
                    <NotificationCard />    
                </div>

        </div>
    );
};

export default Sidebar2;
