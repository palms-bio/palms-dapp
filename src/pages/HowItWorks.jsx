import React from "react";
import CornerLogo from "../components/CornerLogo";

const HowItWorks = () => {
    return (
        <>
            <CornerLogo />
            <div className="flex h-screen w-full font-albertSans justify-center items-center">
                <div className="w-[90%] ">
                    <div className="flex justify-between mb-3 items-center">
                        <h3 className="bg-[linear-gradient(210.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text text-[24px]">
                            How our product works
                        </h3>
                        <a href="" className="inline-block text-[#00AEE6]">
                            {" "}
                            Continue{" "}
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
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-full flex flex-col h-[448px] border border-[#F5F5F540] px-5 py-8 justify-between">
                            <h3 className="text-[48px] font-bold text-right">
                                1
                            </h3>
                            <div>
                                <p className="w-1/2 text-[24px]">
                                    Register and Get a Digester
                                </p>
                                <p className="text-[#C5C5C5] text-[16px]">
                                    Sign up with your email and order our
                                    Digester. Install the Digester at a
                                    disposable bin.
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col h-[448px] border border-[#F5F5F540] px-5 py-8 justify-between">
                            <h3 className="text-[48px] font-bold text-right">
                                2
                            </h3>
                            <div>
                                <p className="w-1/2 text-[24px]">
                                    Connect to Starknet Blockchain
                                </p>
                                <p className="text-[#C5C5C5] text-[16px]">
                                    Have ownership of your asset by connecting
                                    to a wallet provider that supports Starknet.
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col h-[448px] border border-[#F5F5F540] px-5 py-8 justify-between">
                            <h3 className="text-[48px] font-bold text-right">
                                3
                            </h3>
                            <div>
                                <p className="w-1/2 text-[24px]">
                                    Contribute and earn rewards
                                </p>
                                <p className="text-[#C5C5C5] text-[16px]">
                                    Collect bio waste products connected to the
                                    Digester and earn rewards on the blockchain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowItWorks;
