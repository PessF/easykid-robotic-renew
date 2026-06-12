"use client";

import { LogoEs } from "@/app/components/layout/navbar/logo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { smoothScrollTo } from "@/src/scroll";
import { useRouter, usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  nameTh: string;
  href: string;
  color: string;
  isExternal?: boolean;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
  const pathname = usePathname();

  // ตรวจจับ section ที่กำลังอยู่บนหน้า home
  useEffect(() => {
    if (pathname !== "/") return;
    const handleScroll = () => {
      const sections = ["contact", "team", "courses", "about", "home"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (item: MenuItem): boolean => {
    if (item.href === "/moments-and-achievements") return pathname === "/moments-and-achievements";
    if (item.href.startsWith("#")) return pathname === "/" && activeSection === item.href.slice(1);
    return false;
  };

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
  const menuItems: MenuItem[] = [
    { name: "Home", nameTh: "หน้าหลัก", href: "#home", color: "#ef4444" },
    { name: "Competition", nameTh: "การแข่งขัน", href: "https://competition.easykidsrobotics.com/", color: "#f97316", isExternal: true },
    { name: "Courses", nameTh: "คอร์สเรียน", href: "#courses", color: "#eab308" },
    { name: "Files & Resources", nameTh: "ไฟล์และทรัพยากร", href: "https://resources.easykidsrobotics.com/", color: "#22c55e", isExternal: true },
    { name: "Our Team", nameTh: "ทีมงาน", href: "#team", color: "#3b82f6" },
    { name: "Achievements & Activities", nameTh: "ผลงานและกิจกรรม", href: "/moments-and-achievements", color: "#6464FF", isExternal: true },
    { name: "Shop", nameTh: "ร้านค้า", href: "https://easykidsroboticsshop.com/", color: "#6E33D4", isExternal: true },
    { name: "Contact", nameTh: "ติดต่อเรา", href: "#contact", color: "#ec4899" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-4 lg:px-6">
        {/* ===== Navbar Container ===== */}
        <div className="flex justify-between h-20 md:h-24 items-center">
          {/* Logo Section */}
          <LogoEs />

          {/* ===== Desktop Menu ===== */}
<div className="hidden md:flex items-center space-x-0 lg:space-x-2">
  {menuItems.map((item) => {
    const active = isActive(item);
    return (
      <motion.button
        key={item.name}
        onClick={() => handleNavigation(item)}
        whileHover="hover"
        className="px-3 lg:px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap flex flex-col items-center"
      >
        <motion.span
          variants={{ hover: { color: item.color } }}
          animate={{ color: active ? item.color : "" }}
          transition={{ duration: 0.2 }}
          className="text-sm lg:text-base font-black tracking-wide leading-tight text-white"
        >
          {item.name}
        </motion.span>
        <motion.span
          variants={{ hover: { color: item.color } }}
          animate={{ color: active ? item.color : "" }}
          transition={{ duration: 0.2 }}
          className="text-xs leading-tight text-gray-400"
        >
          {item.nameTh}
        </motion.span>
      </motion.button>
    );
  })}
</div>

          {/* ===== Mobile Menu Toggle Button ===== */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
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
            className="md:hidden bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg absolute top-full left-0 right-0 overflow-hidden"
            style={{ transformOrigin: "top center" }}
            variants={dropdownVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="show"
                >
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item);
                    }}
                    whileHover="hover"
                    className="block px-4 py-3 rounded-md transition-all duration-200 w-full text-left hover:bg-white/10"
                  >
                    <motion.span
                      variants={{ hover: { color: item.color, x: 4 } }}
                      animate={{ color: isActive(item) ? item.color : "" }}
                      transition={{ duration: 0.2 }}
                      className="text-white font-black text-sm tracking-wide block"
                    >
                      {item.name}
                    </motion.span>
                    <motion.span
                      variants={{ hover: { color: item.color } }}
                      animate={{ color: isActive(item) ? item.color : "" }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-400 text-xs"
                    >
                      {item.nameTh}
                    </motion.span>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
