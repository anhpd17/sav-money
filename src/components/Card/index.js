import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoneyBillWave,
    faCreditCard,
    faSackDollar,
    faPencilAlt,
    faCheckCircle,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({
    title,
    content,
    type,
    canEdit,
    isLock,
    editing,
    onRename,
    onTrash,
    onReAmount,
}) {
    let typeCard, iconEdit;
    if (type === "cash") {
        typeCard = faMoneyBillWave;
    } else if (type === "bank") {
        typeCard = faCreditCard;
    } else {
        typeCard = faSackDollar;
    }
    if (canEdit === true) {
        iconEdit = faPencilAlt;
    }

    const [editMode, setEditMode] = useState(editing);
    const handleEditAccount = () => {
        if (editMode === false) {
            setEditMode(true);
        } else {
            setEditMode(false);
        }
    };
    return (
        <div className="w-full min-w-[210px] rounded p-6 dark:bg-gray-800 flex items-center justify-between">
            {/* normal UI */}
            {!editMode && (
                <>
                    <FontAwesomeIcon
                        icon={typeCard}
                        className="mr-10 text-3xl text-white"
                    />
                    <div className="flex-1 text-left">
                        <h5 className="mb-2 text-lg font-normal tracking-tight  dark:text-white ">
                            {title}
                        </h5>
                        <h3 className="text-xl font-bold dark:text-white">
                            {content}
                        </h3>
                    </div>
                    <FontAwesomeIcon
                        icon={iconEdit}
                        className=" text-xl text-white text-right hover:text-gray-500 hover:cursor-pointer p-3"
                        onClick={handleEditAccount}
                    />
                </>
            )}
            {/* Edit 2 option */}
            {editMode && !isLock && (
                <>
                    <FontAwesomeIcon
                        icon={typeCard}
                        className="mr-10 text-3xl text-white"
                    />
                    <div className="flex-1 text-left">
                        <input
                            type="text"
                            className="block rounded outline-none border-none px-3 py-1 my-1"
                            placeholder={title}
                            onChange={(e) => onRename(e.target.value)}
                        />
                        <input
                            type="number"
                            className="block rounded outline-none border-none px-3 py-1 my-1"
                            placeholder={content}
                            onBlur={(e) => {
                                onReAmount(e.target.value);
                                e.target.value = 0;
                            }}
                        />
                    </div>

                    {/* EDIT & DELETE BUTTON */}
                    <div className="flex flex-col sm:flex-row">
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className=" text-xl text-white text-right hover:text-gray-500 hover:cursor-pointer p-3"
                            onClick={handleEditAccount}
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            className=" text-xl text-white text-right hover:text-gray-500 hover:cursor-pointer p-3"
                            onClick={onTrash}
                        />
                    </div>
                </>
            )}
            {/* Edit 1 option (locked item) */}
            {editMode && isLock && (
                <>
                    <FontAwesomeIcon
                        icon={typeCard}
                        className="mr-10 text-3xl text-white"
                    />
                    <div className="flex-1 text-left">
                        <h5 className="mb-2 text-lg font-normal tracking-tight  dark:text-white ">
                            {title}
                        </h5>
                        <input
                            type="number"
                            className="block rounded outline-none border-none px-3 py-1 my-1"
                            placeholder={content}
                            onBlur={(e) => {
                                onReAmount(e.target.value);
                                e.target.value = 0;
                            }}
                        />
                    </div>

                    {/* EDIT BUTTON */}
                    <div className="flex flex-col sm:flex-row">
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className=" text-xl text-white text-right hover:text-gray-500 hover:cursor-pointer p-3"
                            onClick={handleEditAccount}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
