import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
export default function Account() {
    const [accounts, setAccounts] = useState([
        {
            name: "Cash",
            amount: 0,
            type: "cash",
            editing: false,
            lock: true,
        },
        {
            name: "Bank",
            amount: 0,
            type: "bank",
            editing: false,
            lock: true,
        },
    ]);
    useEffect(() => {
        if (accounts.length === 2) return;
        window.localStorage.setItem("accounts", JSON.stringify(accounts));
    }, [accounts]);

    useEffect(() => {
        const accountData = window.localStorage.getItem("accounts");
        if (JSON.parse(accountData).length > 2) {
            setAccounts(JSON.parse(accountData));
        }
    }, []);
    // func add account
    const addAccount = () => {
        setAccounts((prev) => {
            return [
                ...prev,
                {
                    name: "New Account",
                    amount: 0,
                    type: "other",
                    editing: true,
                    lock: false,
                },
            ];
        });
    };
    // remove account
    const removeAccount = (indexToRemove) => {
        setAccounts((prev) => {
            return prev.filter((account, index) => index !== indexToRemove);
        });
    };
    // func rename account
    const renameAccount = (index, newname) => {
        setAccounts((prev) => {
            const newAccounts = [...prev];
            newAccounts[index].name = newname;
            newAccounts[index].editing = false;
            return newAccounts;
        });
    };
    // func reamount account
    const reAmountAccount = (index, newAmount) => {
        if (isNaN(newAmount)) {
            alert("Please enter a number on Amount input");
            return;
        }
        setAccounts((prev) => {
            const newAccounts = [...prev];
            newAccounts[index].amount = Number(newAmount);
            newAccounts[index].editing = false;
            return newAccounts;
        });
    };
    return (
        <div className="p-10">
            <h1 className="text-left pl-3 text-gray-300 text-3xl font-semibold ">
                All your Account
            </h1>
            <div className="mt-10 flex justify-evenly flex-col lg:flex-row flex-wrap">
                {accounts.map((account, index) => {
                    return (
                        <div key={index} className="w-full mx-2 my-3">
                            <Card
                                title={account.name}
                                content={account.amount.toLocaleString("en-US")}
                                type={account.type}
                                canEdit={true}
                                isLock={account.lock || false}
                                editing={account.editing}
                                onRename={(newname) =>
                                    renameAccount(index, newname)
                                }
                                onTrash={() => removeAccount(index)}
                                onReAmount={(newAmount) =>
                                    reAmountAccount(index, newAmount)
                                }
                            />
                        </div>
                    );
                })}

                <div
                    className="w-full mx-2 my-3 cursor-pointer"
                    onClick={addAccount}
                >
                    <Card title="Add more account" />
                </div>
            </div>
        </div>
    );
}
