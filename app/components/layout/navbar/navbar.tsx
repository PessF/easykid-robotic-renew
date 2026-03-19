"use client";

import { LogoEs } from "@/app/components/layout/navbar/logo";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { smoothScrollTo } from "@/src/scroll";
import { useRouter } from "next/navigation";

interface MenuItem {
  name: string;
  href: string;
  color: string;
  isExternal?: boolean; // เครื่องหมาย ? หมายถึงจะมีหรือไม่มีก็ได้
}

export const Navbar = () => {
  // State สำหรับเก็บสถานะการเปิด/ปิด dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleNavigation = (item: MenuItem) => {
    setIsOpen(false);

    setTimeout(() => {
      if (item.isExternal) {
        router.push(item.href);
      } else {
        if (typeof window !== "undefined" && window.location.pathname !== "/") {
          router.push("/" + item.href);
        } else {
          smoothScrollTo(item.href);
        }
      }
    }, 150);
  };
  // รายการเมนู (เก็บเป็น Array จะได้แก้ที่เดียวแล้วเปลี่ยนทั้งหมด)
  const menuItems = [
    { name: "Home", href: "#home", color: "#ef4444" },
    { name: "Courses", href: "#courses", color: "#f97316" },
    { name: "Tutorials", href: "#tutorials", color: "#eab308" },
    { name: "Our Team", href: "#team", color: "#22c55e" },
    {
      name: "Moments & Achievements",
      href: "/moments-and-achievements",
      color: "#8b5cf6",
      isExternal: true,
    },
    { name: "Contact Us", href: "#contact", color: "#3b82f6" },
  ];

  // ===== Dropdown Variants สำหรับ Framer Motion =====
  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      scaleY: 0.95,
    },
    show: {
      opacity: 1,
      height: "auto",
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        opacity: { duration: 0.2 },
        height: { duration: 0.3 },
        scaleY: { duration: 0.25 },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      scaleY: 0.95,
      transition: {
        duration: 0.25,
        ease: "easeIn",
        opacity: { duration: 0.15 },
        height: { duration: 0.2 },
        scaleY: { duration: 0.2 },
      },
    },
  };

  // ===== Menu Item Stagger Animation =====
  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Navbar Container ===== */}
        <div className="flex justify-between h-20 md:h-28 items-center">
          {/* Logo Section */}
          <LogoEs />

          {/* ===== Desktop Menu (แสดงบน md screen ขึ้นไป) ===== */}
          <div className="hidden md:flex space-x-1 lg:space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="px-3 py-2 rounded-md text-sm lg:text-base font-bold tracking-wide transition-all duration-200"
              >
                <motion.span
                  whileHover={{
                    color: item.color,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {item.name}
                </motion.span>
              </button>
            ))}
          </div>

          {/* ===== Mobile Menu Toggle Button ===== */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {/* Hamburger Icon / Close Icon */}
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  // Close Icon (X)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile Menu Dropdown (Smooth Animation with Framer Motion) ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg absolute top-full left-0 right-0 overflow-hidden"
            style={{ transformOrigin: "top center" }}
            variants={dropdownVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="show"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item);
                    }}
                    className="block px-4 py-3 rounded-md text-base font-bold tracking-wide transition-all duration-200 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <motion.span
                      whileHover={{
                        color: item.color,
                        x: 4,
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {item.name}
                    </motion.span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
