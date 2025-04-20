import React from "react";

const ProfileCard = () => {
    return (
        <div className="w-full bg-[#081E36] flex p-4 space-x-5 text-[16px]">
            <div>
                <div className="w-[161px] bg-[#FFFFFF80] h-[201px] rounded" />
                <a
                    href="/"
                    className="inline-block text-center text-[#00AEE6] underline mt-2"
                >
                    {" "}
                    Change Picture
                </a>
            </div>
            <div className="mt-auto w-[45%]">
                <p>
                    <span className="text-[#FFFFFF80]">Display Name: </span>{" "}
                    0x32...964
                    <span className="ml-5 text-[#00AEE6] underline">Edit</span>
                </p>
                <p className="mt-4">
                    <span className="text-[#FFFFFF80]">Username: </span>{" "}
                    Mujaheed.stark
                </p>
                <p>
                    <span className="text-[#FFFFFF80]">Home Address: </span> No.
                    32, Street 4, ...
                </p>
            </div>
            <div className="w-full">
                <p className="mt-4 flex justify-end">
                    <span className="text-[#FFFFFF80]">Username: </span>{" "}
                    Mujaheed.stark
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
