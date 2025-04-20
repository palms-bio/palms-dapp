import React from "react";
import CornerLogo from "../../components/CornerLogo";
import {
    CircleUser,
    Gift,
    LayoutDashboard,
    Network,
    Rewind,
    Store,
    Zap,
    History,
    Package,
    Flame,
    CircleDollarSign,
    CircleHelp,
    Settings,
    LogOut,
} from "lucide-react";
import Line2 from "../../components/svg/Line2";

const Sidebar = () => {
    return (
        <>
            <CornerLogo />

            <div className="mt-32 h-screen">
                <div className="flex justify-end px-5">
                    <Rewind />
                </div>
                <ul className="font-albertSans flex flex-col space-y-8 items-center">
                    <li>
                        <a
                            href="/dashboard"
                            className="flex space-x-2 justify-center"
                        >
                            <LayoutDashboard />{" "}
                            <span className="inline-block">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 justify-center"
                        >
                            <Store />{" "}
                            <span className="inline-block">Marketplace</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/energy-asset"
                            className="flex space-x-2 justify-center"
                        >
                            <Zap />{" "}
                            <span className="inline-block">Energy Asset</span>
                        </a>
                    </li>
                    <div className="flex justify-center">
                        <Line2 />
                    </div>
                </ul>
                <ul className="font-albertSans flex flex-col space-y-8 mt-5 items-center">
                    <li>
                        <a
                            href="/dashboard/admin"
                            className="flex space-x-2 justify-center"
                        >
                            <CircleUser />{" "}
                            <span className="inline-block">Admin</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 justify-center"
                        >
                            <Network />{" "}
                            <span className="inline-block">Blockchain</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 justify-center"
                        >
                            <Gift />{" "}
                            <span className="inline-block">Rewards</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 justify-center"
                        >
                            <History />{" "}
                            <span className="inline-block">History</span>
                        </a>
                    </li>

                    <div className="flex justify-center">
                        <Line2 />
                    </div>
                </ul>
                <ul className="font-albertSans flex flex-col space-y-8 mt-5 items-center">
                    <li>
                        <a
                            href="/dashboard"
                            className="flex space-x-2 justify-center"
                        >
                            <Package />{" "}
                            <span className="inline-block">Bio Digester</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 justify-center"
                        >
                            <Flame /> <span className="inline-block">Gas</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 justify-center"
                        >
                            <CircleDollarSign />{" "}
                            <span className="inline-block">Carbon Credit</span>
                        </a>
                    </li>

                    <div className="flex justify-center">
                        <Line2 />
                    </div>
                </ul>
                <ul className="font-albertSans flex flex-col space-y-8 mt-16 items-center">
                    <li>
                        <a
                            href="/dashboard"
                            className="flex space-x-2 justify-center"
                        >
                            <CircleHelp />{" "}
                            <span className="inline-block">Support</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 justify-center"
                        >
                            <Settings />{" "}
                            <span className="inline-block">Settings</span>
                        </a>
                    </li>

                    <div className="flex justify-center">
                        <Line2 />
                    </div>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 justify-center text-red-600"
                        >
                            <LogOut />{" "}
                            <span className="inline-block ">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
