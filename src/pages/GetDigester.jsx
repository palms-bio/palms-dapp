import React from "react";
import getDigester from "../assets/getDigester.png";
import CornerLogo from "../components/CornerLogo";

const GetDigester = () => {
    return (
        <>
            <CornerLogo />
            <div className="flex h-screen w-full font-albertSans justify-center items-center">
                <div className="w-[90%]">
                    <a
                        href="/dashboard"
                        className="block text-[#00AEE6] text-right"
                    >
                        {" "}
                        Later{" "}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline"
                        >
                            <path
                                d="M4.5 12L19.5 12M19.5 12L13.875 6M19.5 12L13.875 18"
                                stroke="#808080"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                    <div className="w-[904px] mx-auto">
                        <h1 className="bg-[linear-gradient(180.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text text-[24px] font-albertSans font-medium mb-3">
                            Get Digester
                        </h1>
                        <div className="flex w-full border border-[#F5F5F540] mx-auto">
                            <img src={getDigester} alt="" className="block" />
                            <div className="w-full flex flex-col h-[448px] border border-[#F5F5F540] px-5 py-8 justify-end space-y-4">
                                <h1 className="bg-[linear-gradient(210.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text text-[24px] font-albertSans font-semibold">
                                    Order a Bio Digester
                                </h1>
                                <p className="text-[#808080] font-albertSans">
                                    Get our physical digester that tracks and
                                    records bio-waste disposal. It will measure
                                    your contribution and give rewards based on
                                    it.
                                </p>
                                <a
                                    className="w-[243px] py-4 bg-[#31C61D] rounded-xl text-center"
                                    href="/dashboard"
                                >
                                    Order Now
                                </a>
                                <p className="text-[#FFFFFF80]">
                                    <span className="text-white">$99 </span>
                                    per Digester
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetDigester;
