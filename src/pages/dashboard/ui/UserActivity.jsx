import { ArrowDownWideNarrow } from "lucide-react";
import React from "react";

const Activities = [
    {
        id: 1,
        title: "1.45KG of waste recycled",
        time: "5 min. ago",
        reward: "+12.6 GAS",
    },
    {
        id: 2,
        title: "1.45KG of waste recycled",
        time: "5 min. ago",
        reward: "+12.6 GAS",
    },
    {
        id: 3,
        title: "1.45KG of waste recycled",
        time: "5 min. ago",
        reward: "+12.6 GAS",
    },
    {
        id: 4,
        title: "1.45KG of waste recycled",
        time: "5 min. ago",
        reward: "+12.6 GAS",
    },
    {
        id: 5,
        title: "1.45KG of waste recycled",
        time: "5 min. ago",
        reward: "+12.6 GAS",
    },
    {
        id: 6,
        title: "1.45KG of waste recycled",
        time: "5 min. ago",
        reward: "+12.6 GAS",
    },
];

const UserActivity = () => {
    return (
        <div className="w-full p-2">
            <p className="text-[#FFFFFF80] text-[14px] ">My Activity</p>
            <div className="border-r border-[#F5F5F50D] p-2">
                <div className="bg-[#F5F5F50D] p-1 rounded-full flex mt-2 w-[71px] ml-auto">
                    <ArrowDownWideNarrow color="#F5F5F540" />
                    <span className="ml-1 text-[14px]">Sort</span>
                </div>
                <div className="flex justify-between">
                    <p className="text-[14px] text-[#F5F5F540]">Detail</p>
                    <p className="text-[14px] text-[#F5F5F540]">Reward</p>
                </div>
                {Activities.map((item) => (
                    <div
                        className="flex justify-between items-center border-b border-[#F5F5F50D] py-2"
                        key={item.id}
                    >
                        <div>
                            <p className="text-[16px] font-semibold mb-2">
                                {item.title}
                            </p>
                            <p className="text-[14px] text-[#6C6C6C]">
                                {item.time}
                            </p>
                        </div>
                        <div>
                            <p className="text-[16px] mb-2">{item.reward}</p>
                            <p className="text-[14px] text-[#6C6C6C] underline">
                                View More
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserActivity;
