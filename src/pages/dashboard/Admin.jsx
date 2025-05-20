import React from "react";
import ProfileCard from "./admin-ui/ProfileCard";
import Settings from "./admin-ui/Settings";
import MyActivity from "./admin-ui/MyActivity";
import MyNfts from "./admin-ui/MyNfts";

const Admin = () => {
    return (
        <div className="py-10 px-5 h-screen">
            <ProfileCard />
            <div className="mt-3 flex space-x-5">
                <Settings />
                <div className="flex flex-col space-y-4 w-[40%] pb-44">
                    <MyActivity />
                    <MyNfts />
                </div>
            </div>
        </div>
    );
};

export default Admin;
