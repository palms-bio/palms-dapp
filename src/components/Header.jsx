import React from "react";
import miniGraph from "../assets/miniGraph.png";
import graph from "../assets/graph.png";
import txns from "../assets/txns.png";

const Header = () => {
    return (
        <header className="mt-24 mb-8 md:mb-12">
            <div className="flex flex-col lg:flex-row justify-between items-center p-4 sm:p-6 md:p-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 gap-8 lg:gap-4">
                <div className="w-full lg:max-w-[702px]">
                    <h2 className="font-plusJakartaSans text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[72px] font-bold mb-4 lg:mb-6 bg-[linear-gradient(210.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text text-center lg:text-left">
                        Revolutionizing waste into value assets
                    </h2>
                    <p className="font-plusJakartaSans text-lg sm:text-xl md:text-2xl text-white text-center lg:text-left">
                        Convert your waste products into tokens on the{" "}
                        <span className="font-semibold">blockchain.</span>
                    </p>
                </div>
                <img
                    src={miniGraph}
                    alt="Analytics visualization"
                    className="w-[180px] sm:w-[200px] md:w-[220px] h-auto object-contain"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 mx-4 sm:mx-8 md:mx-12 lg:mx-16">
                <img
                    src={graph}
                    className="w-full h-auto max-h-[326px] object-contain"
                    alt="Market trends"
                />
                <img
                    src={txns}
                    className="w-full h-auto max-h-[326px] object-contain mt-4 md:mt-0"
                    alt="Transaction history"
                />
            </div>
        </header>
    );
};

export default Header;
