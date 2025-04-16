"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterWrapper({ children }) {
  return (
    <div className="footer w-full bg-[#111]/50 p-5">
      <div className="flex justify-between items-start flex-wrap md:flex-nowrap gap-4">
        <div className="flex-shrink-0">
          <Image src="/logo.png" width={64} height={64} alt="quickshop logo" />
        </div>

        <div className="flex-1 flex justify-end">
          <div className="flex flex-col items-end space-y-2">
            <Link
              href="/"
              className="text-purple-500 hover:text-purple hover:scale-105 duration-300 p-2 font-black text-xl"
            >
              Homepage
            </Link>
            <Link
              href="https://github.com/xKotelek/quickshop"
              className="text-purple-500 hover:text-purple hover:scale-105 duration-300 p-2 font-black text-xl"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full py-2 z-50">
        <div className="flex justify-center items-center text-md text-white">
          <span>Copyright &copy; 2024–2025</span>
          <Link 
            href="https://kotelek.dev" 
            target="_blank" 
            className="font-black text-purple hover:text-purple-500 transition-transform transform duration-300 hover:scale-110 ml-2"
          >
            xKotelek
          </Link>
        </div>
      </div>

    </div>
  );
}
