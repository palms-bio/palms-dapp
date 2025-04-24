import React from "react";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";

function ConnectButton() {
    const { address } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    return (
        <div className="w-full h-full">
            <div className="font-medium absolute">
                {address ? (
                    <div className="mt-0 flex justify-between items-center ">
                        <span>
                            {address.substring(0, 5) +
                                "..." +
                                address.substring(address.length - 5)}
                        </span>
                        <button
                            onClick={() => disconnect()}
                            className="font-bold tracking-wide p-2 pl-8 hover:cursor-pointer text-red-400 hover:text-red-600"
                        >
                            Disconnect
                        </button>
                        <a
                            href="/getdigester"
                            className="inline-block text-center text-green-500"
                        >
                            Proceed
                        </a>
                    </div>
                ) : (
                    <span className="opacity-80 text-lg tracking-wide">
                        Connect your wallet to begin
                    </span>
                )}
            </div>

            {!address && (
                <div className="p-4 py-8 my-2 h-full flex justify-center items-center">
                    <div className="flex flex-col mt-5 space-y-3">
                        {connectors.map((connector) => (
                            <button
                                key={connector.id}
                                onClick={() => connect({ connector })}
                                disabled={!connector.available()}
                                className="border border-[#F5F5F50D] w-[400px] flex justify-between py-5 px-3 rounded-lg"
                            >
                                <p>Connect {connector.name}</p>
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
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ConnectButton;
