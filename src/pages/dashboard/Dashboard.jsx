import React from "react";
import dashboardGraph from "../../assets/dashboardGraph.png";
import { Beaker, Gauge, Leaf } from "lucide-react";
const Dashboard = () => {
    return (
        <div className="border border-[#F5F5F50D] py-12 px-8 w-full">
            <h1>
                Welcome, <span className="text-[24px]">MUJAHID</span>
            </h1>
            <div className="mt-5 flex space-x-3 w-full">
                <img
                    src={dashboardGraph}
                    alt="dash-graph"
                    className="block w-[584px]"
                />
                <div className="flex flex-col space-y-3">
                    <div className="p-3 bg-[#081E36] w-[230px] h-[90px]">
                        <p className="text-[14px] text-[#F5F5F540]">Volume</p>
                        <div className="flex space-x-4 mt-1">
                            <div className="flex bg-[#F5F5F50D] items-center justify-center w-[42px] h-[42px]">
                                <Beaker color="#00AEE6" />
                            </div>
                            <p className="text-[24px] font-semibold">
                                1.26 <span className="text-[16px]">kg</span>{" "}
                            </p>
                        </div>
                    </div>
                    <div className="p-3 bg-[#081E36] w-[230px] h-[88px]">
                        <p className="text-[14px] text-[#F5F5F540]">Pressure</p>
                        <div className="flex space-x-4 mt-1">
                            <div className="flex bg-[#F5F5F50D] items-center justify-center w-[42px] h-[42px]">
                                <Gauge color="#00AEE6" />
                            </div>
                            <p className="text-[24px] font-semibold">
                                102 <span className="text-[16px]">mmHG</span>{" "}
                            </p>
                        </div>
                    </div>
                    <div className="p-3 bg-[#081E36] w-[230px] h-[88px]">
                        <p className="text-[14px] text-[#F5F5F540]">Purity</p>
                        <div className="flex space-x-4 mt-1">
                            <div className="flex bg-[#F5F5F50D] items-center justify-center w-[42px] h-[42px]">
                                <Leaf color="#00AEE6" />
                            </div>
                            <p className="text-[24px] font-semibold">
                                85 <span className="text-[16px]">%</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
