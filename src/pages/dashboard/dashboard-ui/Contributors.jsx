import { SlidersHorizontal, X } from "lucide-react";
import React from "react";

const ContributorsList = [
    {
        id: 1,
        address: "0xa456...E25",
        date: "06 Mar. 25, 16:45",
        volume: "845g",
        GAS: "+12.6",
    },
    {
        id: 2,
        address: "0xa456...E25",
        date: "06 Mar. 25, 16:45",
        volume: "845g",
        GAS: "+12.6",
    },
    {
        id: 3,
        address: "0xa456...E25",
        date: "06 Mar. 25, 16:45",
        volume: "845g",
        GAS: "+12.6",
    },
    {
        id: 4,
        address: "0xa456...E25",
        date: "06 Mar. 25, 16:45",
        volume: "845g",
        GAS: "+12.6",
    },
    {
        id: 5,
        address: "0xa456...E25",
        date: "06 Mar. 25, 16:45",
        volume: "845g",
        GAS: "+12.6",
    },
    {
        id: 6,
        address: "0xa456...E25",
        date: "06 Mar. 25, 16:45",
        volume: "845g",
        GAS: "+12.6",
    },
    {
        id: 7,
        address: "0xa456...E25",
        date: "06 Mar. 25, 16:45",
        volume: "845g",
        GAS: "+12.6",
    },
    {
        id: 8,
        address: "0xa456...E25",
        date: "06 Mar. 25, 16:45",
        volume: "845g",
        GAS: "+12.6",
    },
];

const Contributors = () => {
    return (
        <div className="w-full p-2">
            <p className="text-[#FFFFFF80] text-[14px] ">Contributors</p>
            <div className="p-2">
                <div className="flex justify-end">
                    <div className="bg-[#F5F5F50D] p-1 rounded-full flex mt-2 w-[71px] border border-[#31C61D] mx-3">
                        <X color="#F5F5F540" />
                        <span className="ml-1 text-[14px]">Recent</span>
                    </div>
                    <div className="bg-[#F5F5F50D] p-1 flex mt-2 w-[71px]">
                        <SlidersHorizontal color="#F5F5F540" />
                        <span className="ml-1 text-[14px]">Filter</span>
                    </div>
                </div>

                <div className="flex justify-between text-[#F5F5F540] text-[14px]">
                    <p>Address</p>
                    <p>Date</p>
                    <p>Volume</p>
                    <p>GAS</p>
                </div>
                {ContributorsList.map((item) => (
                    <div
                        className="flex justify-between items-center border-b border-[#F5F5F50D] py-3"
                        key={item.id}
                    >
                        <p className="text-[16px] font-semibold">
                            {item.address}
                        </p>
                        <p className="text-[16px] text-[#6C6C6C]">
                            {item.date}
                        </p>
                        <p className="text-[16px]">{item.volume}</p>
                        <p className="text-[16px]">{item.GAS}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contributors;
