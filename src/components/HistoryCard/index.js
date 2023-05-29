import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightToBracket,
    faRightFromBracket,
    faPencil,
    faCheck,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function HistoryCard({
    type,
    fromSource,
    amount,
    description,
    editing,
    onChangeSource,
    onChangeAmount,
    onChangeDes,
    onTrash,
}) {
    const [accounts, setAccounts] = useState([]);
    const [editMode, setEditMode] = useState(editing);

    // get all accounts from LocalStorage
    useEffect(() => {
        const accountData = window.localStorage.getItem("accounts");
        setAccounts(JSON.parse(accountData));
    }, []);

    const handleEditHistory = () => {
        if (editMode === false) {
            setEditMode(true);
        } else {
            setEditMode(false);
        }
    };
    return (
        <div className="w-full min-w-[210px] rounded mt-2 p-2 dark:bg-gray-800 flex items-center justify-between">
            {!editMode && (
                <>
                    {type && (
                        <FontAwesomeIcon
                            icon={faRightToBracket}
                            className="mx-5 text-2xl text-white text-emerald-500"
                        />
                    )}
                    {!type && (
                        <FontAwesomeIcon
                            icon={faRightFromBracket}
                            className="mx-5 text-2xl text-white text-red-500"
                        />
                    )}
                    <div className="flex-1">
                        <div className="   flex text-left">
                            <h5 className="mb-2 text-lg font-normal tracking-normal  dark:text-white ">
                                {fromSource}
                            </h5>
                            <h3 className="ml-10 text-xl font-bold dark:text-white">
                                {amount}
                            </h3>
                        </div>
                        <h3 className="text-sm font-normal text-white italic">
                            {description}
                        </h3>
                    </div>
                    <FontAwesomeIcon
                        icon={faPencil}
                        className=" text-xl text-white text-right hover:text-gray-500 hover:cursor-pointer p-3"
                        onClick={handleEditHistory}
                    />
                </>
            )}
            {editMode && (
                <>
                    {type && (
                        <FontAwesomeIcon
                            icon={faRightToBracket}
                            className="mx-5 text-2xl text-white text-emerald-500"
                        />
                    )}
                    {!type && (
                        <FontAwesomeIcon
                            icon={faRightFromBracket}
                            className="mx-5 text-2xl text-white text-red-500"
                        />
                    )}
                    <div className="flex-1">
                        <div className="flex text-left">
                            <select
                                className="mb-2 text-lg font-normal tracking-normal  dark:text-blue-900 w-[15%] cursor-pointer"
                                onChange={(e) => onChangeSource(e.target.value)}
                            >
                                {accounts.map((account, index) => {
                                    return (
                                        <option
                                            value={account.name}
                                            key={index}
                                        >
                                            {account.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <input
                                type="number"
                                className="ml-10 text-xl font-bold dark:text-blue-900 outline-none border-none px-2"
                                onBlur={(e) => {
                                    onChangeAmount(e.target.value);
                                }}
                                placeholder={amount}
                            />
                        </div>
                        <input
                            type="text"
                            className="text-sm font-normal text-blue-900 italic outline-none border-none px-3 py-1 w-[70%] mt-2"
                            onChange={(e) => onChangeDes(e.target.value)}
                            placeholder={description}
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faCheck}
                        className=" text-xl text-white text-right hover:text-gray-500 hover:cursor-pointer p-3"
                        onClick={handleEditHistory}
                    />
                    <FontAwesomeIcon
                        icon={faTrash}
                        className=" text-xl text-white text-right hover:text-gray-500 hover:cursor-pointer p-3"
                        onClick={onTrash}
                    />
                </>
            )}
        </div>
    );
}
