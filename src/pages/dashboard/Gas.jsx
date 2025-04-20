import React from "react";
import Sensors from "./gas-ui/Sensors";
import gasProd from "../../assets/svg/gas-prod.svg";
import gasRate from "../../assets/svg/gas-rate.svg";

const activityData = [
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

const ActivityTable = () => {
    // Clean null/undefined items
    const cleanedData = activityData.filter(Boolean);

    // Extract headers from the first non-empty object
    const headers = cleanedData.length > 0 ? Object.keys(cleanedData[0]) : [];

    return (
        <div className="overflow-x-auto mt-5">
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

const Gas = () => {
    return (
        <div className="pt-4 px-4">
            <p></p>
            <div className="mt-4 flex flex-col space-y-3">
                <Sensors />
                <div className="flex space-x-3 items-center">
                    <img src={gasProd} alt="" className="" />
                    <img src={gasRate} alt="" className="" />
                </div>
                <ActivityTable />
            </div>
        </div>
    );
};

export default Gas;
