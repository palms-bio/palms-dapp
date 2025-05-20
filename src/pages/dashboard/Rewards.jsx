import React from "react";
import rewardsGraph from "../../assets/svg/rewards-graph.svg";

const rewardsData = [
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "3.5",
        Token: "STRK",
        Status: "Pending",
    },
    {
        Type: "Claimed",
        Date: "11 July 2025",
        Amount: "13",
        Token: "Gas",
        Status: "Successful",
    },
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "24",
        Token: "Gas",
        Status: "Failed",
    },
    ,
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Pending",
    },
    ,
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Failed",
    },
    ,
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Pending",
    },
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Pending",
    },
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Pending",
    },
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Pending",
    },
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Pending",
    },
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Pending",
    },
    {
        Type: "Received",
        Date: "11 July 2025",
        Amount: "153",
        Token: "STRK",
        Status: "Pending",
    },
];

const RewardsTable = () => {
    // Clean null/undefined items
    const cleanedData = rewardsData.filter(Boolean);

    // Extract headers from the first non-empty object
    const headers = cleanedData.length > 0 ? Object.keys(cleanedData[0]) : [];

    return (
        <div className="overflow-x-auto mt-5 pt-3 pb-[500px]">
            <table className="table-auto w-full ">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className=" px-4 py-2 text-left font-semibold text-[#FFFFFF80] text-[14px]"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cleanedData.map((entry, idx) => (
                        <tr key={idx}>
                            {headers.map((header) => (
                                <td
                                    key={header}
                                    className=" px-4 py-2 text-[14px]"
                                >
                                    {entry[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Rewards = () => {
    return (
        <div className="p-5 hscreen">
            <div className="flex space-x-4">
                <img src={rewardsGraph} alt="" className="block w-full" />
                <div className="bg-gradient-primary pt-20 pb-2 px-5">
                    <p className="text-[20px]">Claim Gas</p>
                    <p className="mt-4 text-[#FFFFFF80] text-[14px]">
                        Claim your produced gas made by your contribution
                    </p>
                    <div className="mt-8">
                        <div className="flex justify-between items-center">
                            <p className="text-[#FFFFFF80] text-[14px]">
                                Unclaimed:
                            </p>
                            <p className="text-[20px]">156</p>
                        </div>
                        <button className="inline-block w-full bg-white text-black py-3 mt-2 rounded-xl">
                            Claim
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#081E36] py-4 px-3 w-full h-[100vh] ">
                <h1 className="text-[14px] text-[#F5F5F540]">History</h1>
                <RewardsTable />
            </div>
        </div>
    );
};

export default Rewards;
