"use client";
import { FaFacebook, FaLine, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} EASYKIDS ROBOTICS. All rights
            reserved.
          </p>
        </div>

        {/* Social Links */}
        <nav className="order-1 md:order-2">
          <ul className="flex items-center gap-6">
            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com/Easykidsrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group transition-all"
              >
                <FaFacebook className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:text-[#1877F2]" />
                <span className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Facebook
                </span>
              </a>
            </li>

            <li className="w-px h-4 bg-gray-700 hidden sm:block" />

            
            <li>
              <a
                href="https://www.youtube.com/channel/UCd0C_CB_L6ltohi0bo3LPBg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group transition-all"
              >
                <FaYoutube className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:text-[#FF0000]" />
                <span className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Youtube
                </span>
              </a>
            </li>

            <li className="w-px h-4 bg-gray-700 hidden sm:block" />

            
            <li>
              <a
                href="https://line.me/ti/p/~@easykidsrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group transition-all"
              >
                <FaLine className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:text-[#06C755]" />
                <span className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Line Official
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
