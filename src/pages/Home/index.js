import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import LineChart from "../../components/LineChart";
import Exchanger from "../../components/Exchanger";

export default function Home() {
    const [data, setData] = useState([]);

    // get all Amount from LocalStorage
    useEffect(() => {
        const accountData = window.localStorage.getItem("accounts");
        setData(JSON.parse(accountData));
    }, []);

    // Amount in Home Page
    let totalAmount = data.reduce(
        (total, item) => (total = total + item.amount),
        0
    );
    let cashAmount = data.reduce((total, item) => {
        if (item.type === "cash") {
            total += item.amount;
        }
        return total;
    }, 0);
    let bankAmount = data.reduce((total, item) => {
        if (item.type === "bank") {
            total += item.amount;
        }
        return total;
    }, 0);
    let otherAmount = totalAmount - cashAmount - bankAmount;

    // render
    return (
        <div className="p-10">
            {/* current balance */}
            <div className="mt-10 py-10 w-3/4 mx-auto bg-gray-800">
                <div className="flex items-center flex-col justify-center px-10">
                    <h3 className="mb-2 text-2xl lg:text-3xl font-normal tracking-tight  dark:text-white ">
                        Current Balance
                    </h3>
                    <h1 className="text-[30px] lg:text-[50px] font-bold dark:text-white">
                        {totalAmount.toLocaleString("en-US")}
                    </h1>
                </div>
            </div>

            {/* Cash & bank */}
            <div className="mt-10 flex justify-evenly flex-col lg:flex-row">
                <div className="w-full lg:w-1/4 my-3">
                    <Card
                        title="Cash"
                        content={cashAmount.toLocaleString("en-US")}
                        type="cash"
                    />
                </div>
                <div className="w-full lg:w-1/4 my-3">
                    <Card
                        title="Bank"
                        content={bankAmount.toLocaleString("en-US")}
                        type="bank"
                    />
                </div>
                <div className="w-full lg:w-1/4 my-3">
                    <Card
                        title="Other"
                        content={otherAmount.toLocaleString("en-US")}
                        type="other"
                    />
                </div>
            </div>

            {/* chart  */}
            <div className="mt-7 flex justify-around h-full sm:h-64 overflow-y-hidden items-center flex-col lg:flex-row flex-wrap">
                <LineChart />
                <Exchanger />
            </div>
        </div>
    );
}
