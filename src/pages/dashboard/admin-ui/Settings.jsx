import React from "react";

const Settings = () => {
    return (
        <div className="bg-[#081E36] py-4 px-3 w-full h-[100vh]">
            <h1 className="text-[14px] text-[#F5F5F540]">Settings</h1>
            <div className="mt-8">
                <h2 className="text-white">Email Address</h2>
                <p className="text-[#FFFFFF80]">s***fe@gmail.com</p>
            </div>
            <div className="mt-8">
                <h2 className="text-[#6C6C6C]">Social</h2>
                <div className="mt-5">
                    <div className="flex justify-between items-center my-2">
                        <div>
                            <p>X</p>
                            <p>Connect to your X account</p>
                        </div>
                        <button className="inline-block bg-[#00AEE6] text-white p-3 rounded">
                            Connect
                        </button>
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <div>
                            <p>Telegram</p>
                            <p>Connect to your Telegram account</p>
                        </div>
                        <button className="inline-block bg-[#00AEE6] text-white p-3 rounded">
                            Connect
                        </button>
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <div>
                            <p>Discord</p>
                            <p>Connect to your Discord account</p>
                        </div>
                        <button className="inline-block bg-[#00AEE6] text-white p-3 rounded">
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
