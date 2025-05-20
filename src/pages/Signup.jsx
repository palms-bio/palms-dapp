import React from "react";
import field from "../assets/field.png";
import CornerLogo from "../components/CornerLogo";

const Signup = () => {
    return (
        <>
            <CornerLogo />
            <div className="flex h-screen w-full justify-center mt-24 mb-24  font-albertSans">
                <img src={field} alt="" className="h-screen object-cover" />
                <div className="flex flex-col space-y-12 justify-center px-12">
                    <div>
                        <h1 className="bg-[linear-gradient(210.39deg,#31c61d_4.11%,rgba(0,174,230,0.901961)_88.82%)] text-transparent bg-clip-text text-[32px] font-albertSans font-bold">
                            Start Saving Energy
                        </h1>
                        <p className="text-[#808080] font-albertSans">
                            Earn rewards on the blockchain
                        </p>
                    </div>
                    <form action="" className="flex flex-col">
                        <p className="text-white text-[24px] mt-5">
                            Sign up with Email
                        </p>
                        <input
                            className="w-[414px] py-4 px-2 bg-[#F5F5F50D] text-[#808080] rounded-xl mt-5"
                            type="email"
                            placeholder="email"
                            required
                        />
                        <input
                            className="w-[414px] py-4 px-2 bg-[#F5F5F50D] text-[#808080] rounded-xl mt-5"
                            type="password"
                            placeholder="password"
                            required
                        />
                        <a
                            className="w-[414px] py-4 bg-[#31C61D] mt-12 text-center"
                            href="/connect"
                        >
                            Register
                        </a>
                        <p className="text-[#808080] font-albertSans mt-5">
                            Already have an account?{" "}
                            <a href="/login" className="text-white">
                                Login
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
