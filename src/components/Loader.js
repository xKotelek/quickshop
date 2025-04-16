"use client";
import { useEffect, useState } from "react";

export default function LoaderWrapper({ children }) {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className={`${isLoaded ? "" : "!opacity-100 !scale-100"} opacity-0 scale-0 duration-300 fixed w-full h-screen z-[9999] backdrop-blur-xl bg-transparent flex justify-center items-center`}>
            <div className="loader"></div>
        </div>
    )
};