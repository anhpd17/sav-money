import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PropTypes from "prop-types";
export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div className="sm:ml-64 bg-slate-500  overflow-y-auto relative top-[72px] right-0 h-screen scrollbar-hide">
                    {children}
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
