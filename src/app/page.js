"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "./homepage.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "@/components/Footer";

const fontClasses = [
  "--font-geist-mono",
  "font-title1",
  "font-title2",
  "font-title3",
];

export default function Home() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [enableFontChange, setEnableFontChange] = useState(false);

  const [showLogo, setShowLogo] = useState(false);

  // title text
  const [showTitleThe, setShowTitleThe] = useState(false);
  const [showTitleFuture, setShowTitleFuture] = useState(false);
  const [showTitleOf, setShowTitleOf] = useState(false);
  const [showTitleItemShops, setShowTitleItemShops] = useState(false);
  // title text

  const [showFeaturesButton, setShowFeaturesButton] = useState(false);

  const animationStart = 100;
  const animationDelay = 300;

  const showTitleTexts = () => {
    setTimeout(() => setShowTitleThe(true), 100)
    setTimeout(() => setShowTitleFuture(true), 200)
    setTimeout(() => setShowTitleOf(true), 300)
    setTimeout(() => setShowTitleItemShops(true), 400)
  };

  useEffect(() => {
    setTimeout(() => setShowLogo(true), animationStart);  

    // title text
    setTimeout(() => showTitleTexts(), animationStart + animationDelay);  
    if (showTitleItemShops) {
      setTimeout(() => {
        setEnableFontChange(true);
      }, 200);
    }
    // title text 

    setTimeout(() => setShowFeaturesButton(true), animationStart + (2*animationDelay));
  }, [showTitleItemShops]);

  useEffect(() => {
    if (enableFontChange) {
      const interval = setInterval(() => {
        setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fontClasses.length);
      }, 850);
  
      return () => clearInterval(interval);
    }
  }, [enableFontChange]);

  return (
    <div className="bg-black overflow-x-clip">
      <div className="bg-black flex flex-col items-center justify-center h-full min-h-screen text-center">
        <div className="flex flex-col items-center font-bold">
          <Image src="/logo.png" width={128} height={128} alt="quickshop logo" className={`duration-800 ${showLogo ? "opacity-100 translate-y-0 blur-none" : "opacity-0 -translate-y-12 blur-[8px]"} p-5`} />
          <p className={`font-bold text-7xl text-white`}>
            <a className={`relative duration-800 ${showTitleThe ? "opacity-100 top-0 blur-none" : "opacity-0 -top-12 blur-[8px]"}`}>The </a> 
            <a className={`relative duration-800 ${showTitleFuture ? "opacity-100 top-0 blur-none" : "opacity-0 -top-12 blur-[8px]"}`}>future </a> 
            <a className={`relative duration-800 ${showTitleOf ? "opacity-100 top-0 blur-none" : "opacity-0 -top-12 blur-[8px]"}`}>of </a> 
            <a className={`relative duration-800 ${showTitleItemShops ? "opacity-100 top-0 blur-none" : "opacity-0 -top-12 blur-[8px]"} ${enableFontChange ? fontClasses[currentFontIndex] : ""} font-black text-purple`}>item shops</a>
          </p>
          <a className={`duration-800 ${showFeaturesButton ? "opacity-100 translate-y-0 blur-none" : "opacity-0 -translate-y-12 blur-[8px]"} text-xl text-white animate-btn-border hover:scale-110 mt-10 bg-[#11111180] hover:bg-[#222] py-2 px-5 rounded-4xl`}>
            Coming Soon
          </a>
          <Link href="https://github.com/xKotelek/quickshop" className={`duration-800 ${showFeaturesButton ? "opacity-100 translate-y-0 blur-none" : "opacity-0 -translate-y-12 blur-[8px]"} text-xl text-white hover:scale-110 mt-5 bg-[#111111] hover:bg-[#222] p-5 w-15 h-15 flex justify-center items-center rounded-full`}>
            <FontAwesomeIcon icon={faGithub}/>
          </Link>
        </div>
      </div>
      <div className="bg-black mt-5">
        <Footer />
      </div>
    </div>
  );
}
