import React from "react";
import bioDigester from "../assets/BioDigester.png";

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-16 px-16">
            <div>
                <h1 className="text-5xl font-[600] font-plusJakartaSans bg-[linear-gradient(210.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text py-2 mb-8">
                    Bio Digester
                </h1>
                <p className="font-plusJakartaSans text-2xl text-white">
                    Convert your waste products into tokens on the{" "}
                    <span className="font-semibold">blockchain.</span>
                </p>
            </div>
            <div className="flex bg-[#00AEE64D] p-5 mt-12">
                <img src={bioDigester} alt="" className="w-[650px] h-[422px]" />
                <div className="flex flex-col justify-center ml-5 font-albertSans space-y-3 w-[70%]">
                    <h1 className=" text-[24px] text-white">
                        Order a Bio Digester
                    </h1>
                    <p className="text-[#FFFFFF80] text-[15px]">
                        Get our physical digester that tracks and records
                        bio-waste disposal. It will measure your contribution
                        and give rewards based on it.
                    </p>
                    <a
                        className="inline-block bg-[#31C61D] w-[243px] text-white rounded-xl text-center py-5"
                        href="/getdigester"
                    >
                        Order Now
                    </a>
                    <p className="text-[#FFFFFF80]">
                        <span className="text-white">$99 </span>per Digester
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
