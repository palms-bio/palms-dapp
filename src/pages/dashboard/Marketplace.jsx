import React from "react";
import LiveSales from "./marketplace-ui/LiveSales";
import TokenPrice from "./marketplace-ui/TokenPrice";
import { SlidersHorizontal } from "lucide-react";

const Marketplace = () => {
    return (
        <div className="p-5">
            <div className="flex space-x-4 items-center">
                <LiveSales />
                <TokenPrice />
            </div>
            <div className="mt-4 p-3 border-t border-[#F5F5F50D]">
                <div className="flex justify-between items-center">
                    <p className="text-[#F5F5F540] text-[14px]">Marketplace</p>
                    <div className="flex space-x-2">
                        <div className="p-2 flex mt-2 border border-white text-[#808080]">
                            My NFTs
                        </div>
                        <div className="bg-[#E9E9E9] p-2 flex mt-2 w-[71px] items-center">
                            <SlidersHorizontal color="#808080" />
                            <span className="ml-1 text-[14px] text-[#808080]">
                                Filter
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {marketPlaceItems.map((item) => (
                        <div className="flex flex-col w-[252px] h-[292px]">
                            <img
                                src="/svg/green.svg"
                                alt=""
                                className="w-full inline-block"
                            />
                            <div className="bg-[#081E36] w-full p-2">
                                <p className="text-right text-[14px] text-[#808080] ">
                                    listed by{" "}
                                    <span className="underline">
                                        0x32...964
                                    </span>
                                </p>
                                <div className="flex justify-between">
                                    <p className="text-[20px] font-semibold">
                                        1.34{" "}
                                        <span className="text-[14px]">Gas</span>
                                    </p>
                                    <p className="text-[16px] font-medium">
                                        0.56{" "}
                                        <span className="text-[14px]">
                                            STRK
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
