import React from "react";

const Navbar = () => {
    return (
        <div className="bg-[#C5C5C5] flex justify-between items-center px-8 py-4">
            <p>
                {" "}
                <span className="text-[32px]">PALMS</span>
                <br /> <span className="text-[#6C6C6C]">Bio Energy</span>
            </p>
            <div className="flex space-x-4 items-center">
                <a href="" className="inline-block">
                    Products
                </a>
                <a href="" className="inline-block">
                    Blockchain
                </a>
                <a href="" className="inline-block">
                    How it works
                </a>
                <a
                    href=""
                    className="flex justify-center items-center w-[150px] h-[50px] bg-[#DEDEDE]"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Navbar;
