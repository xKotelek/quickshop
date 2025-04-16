"use client";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function NotFound() {
    const [showLogo, setShowLogo] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showErrorDesc, setShowErrorDesc] = useState(false);
    const [showHomepageBtn, setShowHomepageBtn] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setShowLogo(true), 100)
      setTimeout(() => setShowError(true), 400);  
      setTimeout(() => setShowErrorDesc(true), 700);  
      setTimeout(() => setShowHomepageBtn(true), 1100);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full min-h-screen text-center">
            <Image src="/logo.png" width={128} height={128} alt="quickshop logo" className={`duration-800 ${showLogo ? "opacity-100 translate-y-0 blur-none" : "opacity-0 -translate-y-12 blur-[8px]"} p-5`} />
            <p className={`duration-800 ${showError ? "opacity-100 translate-y-0 blur-none" : "opacity-0 -translate-y-12 blur-[8px]"} text-4xl font-bold`}>ERROR 404</p>
            <p className={`duration-800 ${showErrorDesc ? "opacity-100 translate-y-0 blur-none" : "opacity-0 -translate-y-12 blur-[8px]"} text-xl font-semibold`}>We couldn't find the page you are looking for!</p>
            <br/>
            <div className={`duration-800 ${showHomepageBtn ? "opacity-100 translate-y-0 blur-none" : "opacity-0 -translate-y-12 blur-[8px]"}`}>
                <Link 
                    href="/" 
                    className="flex duration-300 bg-white text-black items-center justify-center px-4 py-2 rounded-xl font-bold hover:scale-110"
                >
                    Homepage
                </Link>
            </div>
        </div>
    );
}
