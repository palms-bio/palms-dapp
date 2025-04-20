import React from "react";

const Sensors = () => {
    return (
        <div className="bg-[#081E36] px-4 py-2 w-full rounded">
            <p className="text-[#F5F5F540] text-[14px]">Sensors</p>
            <div className="flex space-x-4 items-center">
                <div className="w-full bg-[#0C3855] p-2">
                    <p className="text-[14px] text-[#FFFFFF80]">Methane</p>
                    <div className="flex space-x-12 items-center">
                        <div className="bg-[#FFFFFF80] w-[42px] h-[42px]" />
                        <p className="text-[24px] font-semibold">
                            24{" "}
                            <span className="text-[#808080] text-[20px]">
                                {" "}
                                m3 CH4
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-full bg-[#0C3855] p-2 mt-3">
                    <p className="text-[14px] text-[#FFFFFF80]">Pressure</p>
                    <div className="flex space-x-12 items-center">
                        <div className="bg-[#FFFFFF80] w-[42px] h-[42px]" />
                        <p className="text-[24px] font-semibold">125.56KG</p>
                    </div>
                </div>
                <div className="w-full bg-[#0C3855] p-2 mt-3">
                    <p className="text-[14px] text-[#FFFFFF80]">Bio Digester</p>
                    <div className="flex space-x-12 items-center">
                        <div className="bg-[#FFFFFF80] w-[42px] h-[42px]" />
                        <p className="text-[24px] font-semibold">125.56KG</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sensors;
