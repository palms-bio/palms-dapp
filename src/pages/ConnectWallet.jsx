import React from "react";
import CornerLogo from "../components/CornerLogo";
import argent from "../assets/svg/argent.svg";
import braavos from "../assets/svg/braavos.svg";
import metamask from "../assets/svg/metamask.svg";
const ConnectWallet = () => {
    return (
        <>
            <CornerLogo />

            <div className="flex justify-center items-center h-screen font-albertSans">
                <div>
                    <button className="text-[#808080] text-right mb-8 inline-block w-[464px]">
                        Skip
                    </button>
                    <div className="w-[464px] border border-[#F5F5F50D] rounded-lg p-5">
                        <h1 className="text-[32px] bg-[linear-gradient(210.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text font-bold">
                            Connect Wallet
                        </h1>
                        <p className="text-[#FFFFFF80]">
                            Connect to a wallet provider that supports Starknet
                        </p>
                        <p className="text-center mt-5 text-[#808080]">
                            Create a{" "}
                            <span className="text-[#00AEE6]">Wallet</span> if
                            you don’t have one
                        </p>
                        <div className="flex flex-col mt-5 space-y-3">
                            <button className="border border-[#F5F5F50D] w-[400px] flex justify-between py-5 px-3 rounded-lg">
                                <p>
                                    <img
                                        className="inline mr-2"
                                        src={argent}
                                        alt="argent"
                                    />{" "}
                                    Argent
                                </p>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 12L19.5 12M19.5 12L13.875 6M19.5 12L13.875 18"
                                        stroke="#808080"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="border border-[#F5F5F50D] w-[400px] flex justify-between py-5 px-3 rounded-lg">
                                <p>
                                    <img
                                        className="inline mr-2"
                                        src={braavos}
                                        alt="braavos"
                                    />{" "}
                                    Braavos
                                </p>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 12L19.5 12M19.5 12L13.875 6M19.5 12L13.875 18"
                                        stroke="#808080"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="border border-[#F5F5F50D] w-[400px] flex justify-between py-5 px-3 rounded-lg">
                                <p>
                                    <img
                                        className="inline mr-2"
                                        src={metamask}
                                        alt="metamask"
                                    />{" "}
                                    Metamask
                                </p>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 12L19.5 12M19.5 12L13.875 6M19.5 12L13.875 18"
                                        stroke="#808080"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p className="mt-5 text-[#808080] text-center">
                            By connecting wallet you agree to our{" "}
                            <span className="text-white font-bold">
                                {" "}
                                Terms of Use
                            </span>{" "}
                            and our{" "}
                            <span className="text-white font-bold">
                                {" "}
                                Privacy Policy.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConnectWallet;
