import { SlidersHorizontal } from "lucide-react";
import React from "react";

const NotificationItems = [
    { description: "Produced 214.15 Gas", time: "24 min. ago" },
    { description: "Error with Bio-Digester", time: "32 min. ago" },
    { description: "Produced 214.15 Gas", time: "24 min. ago" },
    { description: "Produced 214.15 Gas", time: "24 min. ago" },
    { description: "Produced 214.15 Gas", time: "24 min. ago" },
    { description: "Produced 214.15 Gas", time: "24 min. ago" },
];

const NotificationCard = () => {
    return (
        <div className="w-full bg-[#0C3855] p-3 rounded-xl mt-5">
            <div className="flex justify-between items-center">
                <p className="text-[14px] text-[#FFFFFF80]">Notification</p>
                <SlidersHorizontal />
            </div>
            {NotificationItems.map((item, index) => (
                <div
                    className="mt-3 border-b border-[#F5F5F50D] p-2"
                    key={index}
                >
                    <p className="text-white text-[16px]">{item.description}</p>
                    <p className="text-right text-[#808080] text-[12px]">
                        {item.time}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default NotificationCard;
