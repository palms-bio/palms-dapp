import React from "react";
import AccountCard from "./ui/AccountCard";
import NotificationCard from "./ui/NotificationCard";

const Sidebar2 = () => {
    return (
        <div className="pt-6 px-5 pb-12">
            <AccountCard />
            <NotificationCard />
        </div>
    );
};

export default Sidebar2;
