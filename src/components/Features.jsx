import React from "react";
import productImage from "../assets/productImage.png";

const Features = () => {
    return (
        <section className="py-16 px-16">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold font-plusJakartaSans bg-[linear-gradient(210.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text mb-6">
                    How Our Product Works
                </h2>
                <p className="font-plusJakartaSans text-2xl text-white">
                    Convert your waste products into tokens on the{" "}
                    <span className="font-semibold">blockchain.</span>
                </p>
                <div className="mt-8 flex justify-center items-center">
                    <img src={productImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Features;
