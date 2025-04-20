import React from "react";

const MyActivity = () => {
    return (
        <div className="bg-[#081E36] w-full h-full px-1 pt-3">
            <h1 className="text-[14px] text-[#F5F5F540]">My activity</h1>

            <div className="mt-4">
                <div className="w-full bg-[#0C3855] p-2">
                    <p className="text-[14px] text-[#FFFFFF80]">Total Volume</p>
                    <div className="flex space-x-12">
                        <div className="bg-[#FFFFFF80] w-[42px] h-[42px]" />
                        <p className="text-[24px] font-semibold">125.56</p>
                    </div>
                </div>
                <div className="w-full bg-[#0C3855] p-2 mt-3">
                    <p className="text-[14px] text-[#FFFFFF80]">Gas Earned</p>
                    <div className="flex space-x-12">
                        <div className="bg-[#FFFFFF80] w-[42px] h-[42px]" />
                        <p className="text-[24px] font-semibold">457.256</p>
                    </div>
                </div>
                <div className="w-full bg-[#0C3855] p-2 mt-3">
                    <p className="text-[14px] text-[#FFFFFF80]">Rate</p>
                    <div className="flex space-x-12">
                        <div className="bg-[#FFFFFF80] w-[42px] h-[42px]" />
                        <p className="text-[24px] font-semibold">86%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyActivity;
