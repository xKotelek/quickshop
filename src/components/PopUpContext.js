"use client";

import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export function PopupProvider({ children }) {
    const [isShown, setIsShown] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState(null);
    const [urlText, setUrlText] = useState("");

    const showPopup = (popupTitle, popupDescription, popupUrl = null, popupUrlText = "") => {
        setTitle(popupTitle);
        setDescription(popupDescription);
        setUrl(popupUrl);
        setUrlText(popupUrlText);
        setIsShown(true);
    };

    const hidePopup = () => {
        setIsShown(false);
        setUrl(null);
        setUrlText("");
    };

    return (
        <PopupContext.Provider value={{ showPopup }}>
            {children}
            <div className={`${isShown ? "opacity-100 backdrop-blur-xl bg-black/50 blur-none pointer-events-auto" : "opacity-0 backdrop-blur-none bg-transparent blur-xl pointer-events-none"} duration-300 fixed inset-0 flex items-center justify-center z-[9999]`}>
                <div className={`${isShown ? "blur-none scale-100" : "blur-[8px] scale-0"} duration-300 bg-[#11111175] border border-[#22222275] p-6 rounded-4xl shadow-lg max-w-sm w-full`}>
                    <h2
                        className="text-2xl font-bold mb-2"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <div
                        className="text-lg mb-4"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={hidePopup}
                            className="cursor-pointer bg-purple-500 font-bold text-white px-4 py-2 rounded-2xl hover:scale-110 duration-300"
                        >
                            Okay
                        </button>
                        {url && urlText && (
                            <button
                                onClick={() => {window.location.href=url;}}
                                className="cursor-pointer border border-purple-500 bg-purple/25 hover:bg-purple/50 font-bold text-white px-4 py-2 rounded-2xl hover:scale-110 duration-300"
                            >
                                {urlText}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </PopupContext.Provider>
    );
}

export function usePopup() {
    return useContext(PopupContext);
}
