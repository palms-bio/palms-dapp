import React from "react";
import UserActivity from "./ui/UserActivity";
import Contributors from "./ui/Contributors";

const Activities = () => {
    return (
        <div className="bg-[#081E36] p-1 flex mt-5 w-full">
            <UserActivity />
            <Contributors />
        </div>
    );
};

export default Activities;
