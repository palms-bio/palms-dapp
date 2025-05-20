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
        <div className="w-full">
            <CornerLogo />

            <div className="mt-24 h-screen fixed  overflow-scroll scrollbar-hide px-7">
                <div className="flex justify-end mb-4">
                    <Rewind />
                </div>
                <ul className="font-albertSans flex flex-col space-y-8 ">
                    <li>
                        <a
                            href="/dashboard"
                            className="flex space-x-2 "
                        >
                            <LayoutDashboard />{" "}
                            <span className="inline-block">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 "
                        >
                            <Store />{" "}
                            <span className="inline-block">Marketplace</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/energy-asset"
                            className="flex space-x-2"
                        >
                            <Zap />{" "}
                            <span className="inline-block">Energy Asset</span>
                        </a>
                    </li>
                    <div className="flex justify-center">
                        <Line2 />
                    </div>
                </ul>
                <ul className="font-albertSans flex flex-col space-y-8 mt-5 ">
                    <li>
                        <a
                            href="/dashboard/admin"
                            className="flex space-x-2 "
                        >
                            <CircleUser />{" "}
                            <span className="inline-block">Admin</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2"
                        >
                            <Network />{" "}
                            <span className="inline-block">Blockchain</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/rewards"
                            className="flex space-x-2"
                        >
                            <Gift />{" "}
                            <span className="inline-block">Rewards</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2"
                        >
                            <History />{" "}
                            <span className="inline-block">History</span>
                        </a>
                    </li>

                    <div className="flex">
                        <Line2 />
                    </div>
                </ul>
                <ul className="font-albertSans flex flex-col space-y-8 mt-5 mb-28">
                    <li>
                        <a
                            href="/dashboard"
                            className="flex space-x-2"
                        >
                            <Package />{" "}
                            <span className="inline-block">Bio Digester</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/gas"
                            className="flex space-x-2 "
                        >
                            <Flame /> <span className="inline-block">Gas</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 "
                        >
                            <CircleDollarSign />{" "}
                            <span className="inline-block">Carbon Credit</span>
                        </a>
                    </li>

                    <div className="flex ">
                        <Line2 />
                    </div>
                </ul>
                <ul className="font-albertSans flex flex-col space-y-8 mt-16 mb-36">
                    <li>
                        <a
                            href="/dashboard"
                            className="flex space-x-2 "
                        >
                            <CircleHelp />{" "}
                            <span className="inline-block">Support</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2 r"
                        >
                            <Settings />{" "}
                            <span className="inline-block">Settings</span>
                        </a>
                    </li>

                    <div className="flex ">
                        <Line2 />
                    </div>
                    <li>
                        <a
                            href="/dashboard/marketplace"
                            className="flex space-x-2  text-red-600"
                        >
                            <LogOut />{" "}
                            <span className="inline-block ">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
