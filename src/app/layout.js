import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./scroll-animations.css";

import Loader from "@/components/Loader";
import { PopupProvider } from "@/components/PopUpContext";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "quickshop",
  description: "Create your own shop, for your server for FREE!",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Imperial+Script&family=Modak&family=Pacifico&family=Permanent+Marker&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased bg-black text-white">
        <PopupProvider>
          <Loader />
          <Analytics />
           <div className="w-full h-screen flex flex-col">
             <div className="flex-1 overflow-auto ease-in-out">
               {children}
            </div>
          </div>
         </PopupProvider>
      </body>
    </html>
  );
}
