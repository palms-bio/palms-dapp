import React from "react";

const TokenPrice = () => {
    return (
        <div className="bg-[#081E36] px-4 py-2 w-[256px] rounded h-[88px]">
            <p className="text-[#F5F5F540] text-[14px]">Token Price</p>
            <p className="mt-5 text-24px font-semibold">
                1.00 <span className="text-[16px] font-normal">GAS</span>
                <span className="ml-3"> ~ 0.35 </span>{" "}
                <span className="text-[16px] font-normal">STRK</span>
            </p>
        </div>
    );
};

export default TokenPrice;
