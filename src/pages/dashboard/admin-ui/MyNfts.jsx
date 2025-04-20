import React from "react";
import green from "../../../assets/svg/green.svg";
const MyNfts = () => {
    return (
        <div className="bg-[#081E36] w-full h-full px-3 py-4">
            <h1 className="text-[14px] text-[#F5F5F540]">My NFTs</h1>

            <div className="mt-3 flex flex-col space-y-3">
                <div className="w-full bg-[#F5F5F50D] h-[60px] flex">
                    <div className="w-full">
                        <img src={green} alt="" className="w-full h-full " />
                    </div>
                    <div className="p-3 w-full">
                        <p className="text-[16px] text-[#808080] text-right">
                            Gas <span className="ml-3 text-white">154</span>
                        </p>
                        <p className="text-[#FFFFFF80]">#1456879</p>
                    </div>
                </div>
                <div className="w-full bg-[#F5F5F50D] h-[60px] flex">
                    <div className="w-full">
                        <img src={green} alt="" className="w-full h-full" />
                    </div>
                    <div className="p-3 w-full">
                        <p className="text-[16px] text-[#808080] text-right">
                            Gas <span className="ml-3 text-white">154</span>
                        </p>
                        <p className="text-[#FFFFFF80]">#1456879</p>
                    </div>
                </div>
                <div className="w-full bg-[#F5F5F50D] h-[60px] flex">
                    <div className="w-full">
                        <img src={green} alt="" className="w-full h-full" />
                    </div>
                    <div className="p-3 w-full">
                        <p className="text-[16px] text-[#808080] text-right">
                            Gas <span className="ml-3 text-white">154</span>
                        </p>
                        <p className="text-[#FFFFFF80]">#1456879</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNfts;
