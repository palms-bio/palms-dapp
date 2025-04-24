import React from "react";
import { useAccount, useBalance } from "@starknet-react/core";

const AccountCard = () => {
    const { address } = useAccount();
    return (
        <div className="flex flex-col space-y-4">
            <div className="w-full bg-[#0C3855] p-3 rounded-xl">
                <div className="flex justify-between items-center">
                    <p className="text-[#FFFFFF80] text-[14px]">Your Balance</p>
                    <p className="border border-white bg-[rgba(0,0,0,0.3) p-1">
                        {address
                            ? address.substring(0, 4) +
                              "..." +
                              address.substring(address.length - 3)
                            : "0x32...964"}
                    </p>
                </div>
                <div className="mt-6">
                    <p>
                        <span className="text-[32px] font-semibold">36.</span>69{" "}
                        <span className="ml-5">$STRK</span>
                    </p>
                    <div className="flex space-x-3 items-center">
                        <p>~24.14 USDT </p>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.99992 11.3334C8.18881 11.3334 8.34725 11.2694 8.47525 11.1414C8.60325 11.0134 8.66703 10.8552 8.66659 10.6667V8.00004C8.66659 7.81115 8.60259 7.65293 8.47459 7.52537C8.34659 7.39782 8.18836 7.33382 7.99992 7.33337C7.81147 7.33293 7.65325 7.39693 7.52525 7.52537C7.39725 7.65382 7.33325 7.81204 7.33325 8.00004V10.6667C7.33325 10.8556 7.39725 11.014 7.52525 11.142C7.65325 11.27 7.81147 11.3338 7.99992 11.3334ZM7.99992 6.00004C8.18881 6.00004 8.34725 5.93604 8.47525 5.80804C8.60325 5.68004 8.66703 5.52182 8.66659 5.33337C8.66614 5.14493 8.60214 4.98671 8.47459 4.85871C8.34703 4.73071 8.18881 4.66671 7.99992 4.66671C7.81103 4.66671 7.65281 4.73071 7.52525 4.85871C7.3977 4.98671 7.3337 5.14493 7.33325 5.33337C7.33281 5.52182 7.39681 5.68026 7.52525 5.80871C7.6537 5.93715 7.81192 6.00093 7.99992 6.00004ZM7.99992 14.6667C7.0777 14.6667 6.21103 14.4916 5.39992 14.1414C4.58881 13.7912 3.88325 13.3163 3.28325 12.7167C2.68325 12.1172 2.20836 11.4116 1.85859 10.6C1.50881 9.78848 1.3337 8.92182 1.33325 8.00004C1.33281 7.07826 1.50792 6.2116 1.85859 5.40004C2.20925 4.58849 2.68414 3.88293 3.28325 3.28337C3.88236 2.68382 4.58792 2.20893 5.39992 1.85871C6.21192 1.50849 7.07859 1.33337 7.99992 1.33337C8.92125 1.33337 9.78792 1.50849 10.5999 1.85871C11.4119 2.20893 12.1175 2.68382 12.7166 3.28337C13.3157 3.88293 13.7908 4.58849 14.1419 5.40004C14.493 6.2116 14.6679 7.07826 14.6666 8.00004C14.6653 8.92182 14.4901 9.78848 14.1413 10.6C13.7924 11.4116 13.3175 12.1172 12.7166 12.7167C12.1157 13.3163 11.4101 13.7914 10.5999 14.142C9.7897 14.4927 8.92303 14.6676 7.99992 14.6667ZM7.99992 13.3334C9.48881 13.3334 10.7499 12.8167 11.7833 11.7834C12.8166 10.75 13.3333 9.48893 13.3333 8.00004C13.3333 6.51115 12.8166 5.25004 11.7833 4.21671C10.7499 3.18337 9.48881 2.66671 7.99992 2.66671C6.51103 2.66671 5.24992 3.18337 4.21659 4.21671C3.18325 5.25004 2.66659 6.51115 2.66659 8.00004C2.66659 9.48893 3.18325 10.75 4.21659 11.7834C5.24992 12.8167 6.51103 13.3334 7.99992 13.3334Z"
                                fill="#808080"
                            />
                        </svg>
                    </div>
                </div>
                <div className="mt-8 flex w-full space-x-3">
                    <button className="w-full block py-3 rounded-xl bg-[#31C61D]">
                        {" "}
                        Send
                    </button>
                    <button className="w-full block py-3 rounded-xl border border-[#31C61D]">
                        {" "}
                        Receive{" "}
                    </button>
                </div>
            </div>
            <div className="w-full bg-[#0C3855] p-3 rounded-xl">
                <a
                    href="/"
                    className="block text-right text-[14px] text-[#FFFFFF80] underline"
                >
                    {" "}
                    History
                </a>
                <div className="flex flex-col justify-center items-center">
                    <p>
                        <span className="text-[24px]">2734.</span>75{" "}
                        <span className="text-[#808080] ml-4">Gas</span>
                    </p>
                    <p>
                        +734.57
                        <span className="text-[#808080] ml-4">24h</span>
                    </p>
                </div>
                <button className="block w-full border border-[#00AEE6] py-3 rounded-xl mt-4">
                    Convert to $STRK
                </button>
            </div>
        </div>
    );
};

export default AccountCard;
