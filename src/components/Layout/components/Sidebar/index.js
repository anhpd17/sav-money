import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCreditCard,
    faChartSimple,
    faClockRotateLeft,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-5 font-medium">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center px-2 py-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FontAwesomeIcon
                                icon={faHouse}
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-9 dark:group-hover:text-white"
                            />
                            <span className="ml-3">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/account"
                            className="flex items-center px-2 py-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FontAwesomeIcon
                                icon={faCreditCard}
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-9 dark:group-hover:text-white"
                            />
                            <span className="flex-1 ml-3 text-left">
                                Account
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/report"
                            className="flex items-center px-2 py-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FontAwesomeIcon
                                icon={faChartSimple}
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-9 dark:group-hover:text-white"
                            />
                            <span className="flex-1 ml-3 text-left">
                                Report
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/history"
                            className="flex items-center px-2 py-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FontAwesomeIcon
                                icon={faClockRotateLeft}
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-9 dark:group-hover:text-white"
                            />
                            <span className="flex-1 ml-3 text-left">
                                Your History
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/login"
                            className="flex items-center px-2 py-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FontAwesomeIcon
                                icon={faRightFromBracket}
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-9 dark:group-hover:text-white"
                            />
                            <span className="flex-1 ml-3 text-left">
                                Sign out
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
