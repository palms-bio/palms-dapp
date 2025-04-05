import React from "react";

const LiveSales = () => {
    return (
        <div className="bg-[#081E36] px-4 py-2 w-full rounded h-[88px]">
            <p className="text-[#F5F5F540] text-[14px]">Live Sales</p>
            <div className="flex space-x-4">
                <div className="w-full bg-[#0C3855] p-2 flex justify-between items-center rounded">
                    <p className="text-[20px] font-semibold">
                        198 <span className="ml-2 text-[14px]">Gas</span>
                    </p>
                    <span className="inline-block text-center border border-[#31C61D] p-3 rounded">
                        Sold
                    </span>
                </div>
                <div className="w-full bg-[#0C3855] p-2 flex justify-between items-center rounded">
                    <p className="text-[20px] font-semibold">
                        198 <span className="ml-2 text-[14px]">Gas</span>
                    </p>
                    <span className="inline-block text-center border border-[#31C61D] p-3 rounded">
                        Sold
                    </span>
                </div>
                <div className="w-full bg-[#0C3855] p-2 flex justify-between items-center rounded">
                    <p className="text-[20px] font-semibold">
                        198 <span className="ml-2 text-[14px]">Gas</span>
                    </p>
                    <span className="inline-block text-center border border-[#31C61D] p-3 rounded">
                        Sold
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LiveSales;
