import React, { useEffect, useState } from "react";
import HistoryCard from "../../components/HistoryCard";

export default function History() {
    const [histories, setHistories] = useState([
        {
            type: false,
            source: "bank",
            amount: 10000,
            describe: "testing transaction",
            editing: false,
        },
        {
            type: true,
            source: "other",
            amount: 10000,
            describe: "testing transaction",
            editing: false,
        },
        {
            type: false,
            source: "cash",
            amount: 10000,
            describe: "testing transaction",
            editing: false,
        },
        {
            type: false,
            source: "bank",
            amount: 10000,
            describe: "testing transaction",
            editing: false,
        },
        {
            type: true,
            source: "bank",
            amount: 10000,
            describe: "testing transaction",
            editing: false,
        },
        {
            type: false,
            source: "bank",
            amount: 10000,
            describe: "testing transaction",
            editing: false,
        },
    ]);

    useEffect(() => {
        window.localStorage.setItem("histories", JSON.stringify(histories));
    }, [histories]);
    // get all Amount from LocalStorage
    useEffect(() => {
        const historyData = window.localStorage.getItem("histories");
        setHistories(JSON.parse(historyData));
    }, []);

    // remove history item
    const removeHistoryItem = (indexToRemove) => {
        setHistories((prev) => {
            return prev.filter((history, index) => index !== indexToRemove);
        });
    };
    // change source
    const changeSource = (index, newSource) => {
        setHistories((prev) => {
            const newHistories = [...prev];
            newHistories[index].source = newSource;
            newHistories[index].editing = false;
            return newHistories;
        });
    };
    // change description
    const changeDes = (index, newDes) => {
        setHistories((prev) => {
            const newHistories = [...prev];
            newHistories[index].describe = newDes;
            newHistories[index].editing = false;
            return newHistories;
        });
    };
    // change amount
    const changeAmount = (index, newAmount) => {
        if (isNaN(newAmount)) {
            alert("Please enter a number on Amount input");
            return;
        }
        setHistories((prev) => {
            const newHistories = [...prev];
            newHistories[index].amount = Number(newAmount);
            newHistories[index].editing = false;
            return newHistories;
        });
    };

    return (
        <div className="p-10">
            <h1 className="text-left pl-3 text-gray-300 text-3xl font-semibold mb-6">
                Your activities
            </h1>
            {histories.map((history, index) => {
                return (
                    <>
                        <HistoryCard
                            key={index}
                            fromSource={history.source}
                            type={history.type}
                            amount={history.amount.toLocaleString("en-US")}
                            description={history.describe}
                            editing={history.editing}
                            onChangeSource={(newSource) =>
                                changeSource(index, newSource)
                            }
                            onChangeDes={(newDes) => changeDes(index, newDes)}
                            onChangeAmount={(newAmount) =>
                                changeAmount(index, newAmount)
                            }
                            onTrash={() => removeHistoryItem(index)}
                        />
                    </>
                );
            })}
        </div>
    );
}
