import React from "react";
import miniGraph from "../assets/svg/miniGraph.svg";
import graph from "../assets/svg/graph.svg";
import txns from "../assets/svg/txns.svg";

const Header = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center p-4 mx-8">
                <div className="w-[702px]">
                    <p className="font-albertSans text-[64px]">
                        Revolutionizing waste into value assets
                    </p>
                    <p className="font-albertSans text-[24px]">
                        Convert your waste products into tokens on the{" "}
                        <span className="font-semibold">blockchain.</span>
                    </p>
                </div>
                <div className="w-[220px] h-[173px]">
                    <img
                        src={miniGraph}
                        alt="mini-graph"
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="flex h-[326px] my-4 mx-8 space-x-8">
                <img src={graph} className="w-full h-full" alt="graph" />
                <img src={txns} className="w-full h-full" alt="txns" />
            </div>
        </div>
    );
};

export default Header;
