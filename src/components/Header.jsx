import React from "react";
import miniGraph from "../assets/miniGraph.png";
import graph from "../assets/graph.png";
import txns from "../assets/txns.png";

const Header = () => {
    return (
        <header className="mt-24 mb-12">
            <div className="flex justify-between items-center p-8 mx-16">
                <div className="max-w-[702px]">
                    <h2 className="font-plusJakartaSans text-[64px] leading-[72px] font-bold mb-6 bg-[linear-gradient(210.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text">
                        Revolutionizing waste into value assets
                    </h2>
                    <p className="font-plusJakartaSans text-2xl text-white">
                        Convert your waste products into tokens on the{" "}
                        <span className="font-semibold">blockchain.</span>
                    </p>
                </div>
                <img
                    src={miniGraph}
                    alt="Analytics visualization"
                    className="w-[220px] h-[173px] object-contain"
                />
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12 mx-16">
                <img
                    src={graph}
                    className="w-full h-[326px] object-contain"
                    alt="Market trends"
                />
                <img
                    src={txns}
                    className="w-full h-[326px] object-contain"
                    alt="Transaction history"
                />
            </div>
        </header>
    );
};

export default Header;
