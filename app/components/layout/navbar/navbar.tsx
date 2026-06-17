"use client";

import { LogoEs } from "@/app/components/layout/navbar/logo";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { smoothScrollTo } from "@/src/scroll";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface MenuItem {
  name: string;
  nameTh: string;
  href: string;
  color: string;
  isExternal?: boolean;
}

const courseSubItems = [
  { label: "KIDS", age: "Ages 5-7", href: "/course/kids", color: "#6eb7e5" },
  { label: "JUNIORS", age: "Ages 8-12", href: "/course/juniors", color: "#78bcaa" },
  { label: "SENIORS", age: "Ages 12+", href: "/course/seniors", color: "#e08754" },
];

const momentSubItems = [
  { label: "Class", labelTh: "คลาส", href: "/moments-and-achievements?tab=class", color: "#c87df5" },
  { label: "Robots", labelTh: "หุ่นยนต์", href: "/moments-and-achievements?tab=robot", color: "#878cf6" },
  { label: "Place", labelTh: "สถานที่เรียน", href: "/moments-and-achievements?tab=station", color: "#6eb7e5" },
  { label: "Activities", labelTh: "กิจกรรม", href: "/moments-and-achievements?tab=event", color: "#78bcaa" },
  { label: "Achievements", labelTh: "รางวัล", href: "/moments-and-achievements?tab=rewards", color: "#e4b82a" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [momentDropdownOpen, setMomentDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileMomentOpen, setMobileMomentOpen] = useState(false);
  const [courseDropdownLeft, setCourseDropdownLeft] = useState(0);
  const [momentDropdownLeft, setMomentDropdownLeft] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const coursesButtonRef = useRef<HTMLButtonElement>(null);
  const momentButtonRef = useRef<HTMLButtonElement>(null);
  const courseCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const momentCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ตรวจสอบ active item จาก path
  useEffect(() => {
    if (pathname === "/moments-and-achievements") {
      setActiveSection("Achievements & Activities");
      return;
    }
    if (pathname.startsWith("/course/")) {
      setActiveSection("Courses");
      return;
    }
    if (pathname !== "/") return;

    // บนหน้าหลัก ใช้ IntersectionObserver จับ section ที่กำลังดูอยู่
    const sectionMap: Record<string, string> = {
      home: "Home",
      courses: "Courses",
      team: "Our Team",
      contact: "Contact",
    };

    const observers: IntersectionObserver[] = [];
    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(sectionMap[id]); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [pathname]);

  const handleCoursesEnter = () => {
    if (courseCloseTimer.current) clearTimeout(courseCloseTimer.current);
    if (coursesButtonRef.current) {
      const rect = coursesButtonRef.current.getBoundingClientRect();
      setCourseDropdownLeft(rect.left + rect.width / 2 - 120);
    }
    setCourseDropdownOpen(true);
  };

  const handleCoursesLeave = () => {
    courseCloseTimer.current = setTimeout(() => setCourseDropdownOpen(false), 120);
  };

  const handleMomentEnter = () => {
    if (momentCloseTimer.current) clearTimeout(momentCloseTimer.current);
    if (momentButtonRef.current) {
      const rect = momentButtonRef.current.getBoundingClientRect();
      setMomentDropdownLeft(rect.left + rect.width / 2 - 120);
    }
    setMomentDropdownOpen(true);
  };

  const handleMomentLeave = () => {
    momentCloseTimer.current = setTimeout(() => setMomentDropdownOpen(false), 120);
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

  const menuItems: MenuItem[] = [
    { name: "Home", nameTh: "หน้าหลัก", href: "#home", color: "#c87df5" },
    { name: "Competition", nameTh: "การแข่งขัน", href: "https://competition.easykidsrobotics.com/", color: "#878cf6", isExternal: true },
    { name: "Courses", nameTh: "คอร์สเรียน", href: "#courses", color: "#6eb7e5" },
    { name: "Tutorials", nameTh: "คู่มือการใช้งาน", href: "https://resources.easykidsrobotics.com/", color: "#78bcaa", isExternal: true },
    { name: "Our Team", nameTh: "ทีมงาน", href: "#team", color: "#e4b82a" },
    { name: "Achievements & Activities", nameTh: "ผลงานและกิจกรรม", href: "/moments-and-achievements", color: "#e08754", isExternal: true },
    { name: "Shop", nameTh: "ร้านค้า", href: "https://easykidsroboticsshop.com/", color: "#d74d5e", isExternal: true },
    { name: "Contact", nameTh: "ติดต่อเรา", href: "#contact", color: "#a3a3a3" },
  ];

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, height: 0, scaleY: 0.95 },
    show: {
      opacity: 1, height: "auto", scaleY: 1,
      transition: { duration: 0.3, ease: "easeOut", opacity: { duration: 0.2 }, height: { duration: 0.3 } },
    },
    exit: {
      opacity: 0, height: 0, scaleY: 0.95,
      transition: { duration: 0.25, ease: "easeIn", opacity: { duration: 0.15 }, height: { duration: 0.2 } },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: (index: number) => ({
      opacity: 1, x: 0,
      transition: { delay: index * 0.05, duration: 0.3 },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10" onMouseLeave={() => setHoveredItem(null)}>
      <div className="w-full px-4 lg:px-6">
        <div className="flex justify-between h-20 md:h-24 items-center">
          <LogoEs />

          {/* ===== Desktop Menu ===== */}
          <div className="hidden md:flex items-center space-x-0 lg:space-x-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.name;
              const isHovered = hoveredItem === item.name;
              const showBar = isActive || isHovered;

              if (item.name === "Courses") {
                return (
                  <button
                    key={item.name}
                    ref={coursesButtonRef}
                    onClick={() => handleNavigation(item)}
                    onMouseEnter={() => { handleCoursesEnter(); setHoveredItem(item.name); }}
                    onMouseLeave={() => { handleCoursesLeave(); }}
                    className="relative px-3 lg:px-4 py-2 rounded-md whitespace-nowrap flex flex-col items-center"
                  >
                    <span style={{ color: item.color }} className="text-sm lg:text-base font-black tracking-wide leading-tight">{item.name}</span>
                    <span style={{ color: item.color }} className="text-xs leading-tight opacity-80">{item.nameTh}</span>
                    {showBar && (
                      <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full" style={{ backgroundColor: item.color, opacity: isActive ? 1 : 0.5 }} />
                    )}
                  </button>
                );
              }

              if (item.name === "Achievements & Activities") {
                return (
                  <button
                    key={item.name}
                    ref={momentButtonRef}
                    onClick={() => handleNavigation(item)}
                    onMouseEnter={() => { handleMomentEnter(); setHoveredItem(item.name); }}
                    onMouseLeave={() => { handleMomentLeave(); }}
                    className="relative px-3 lg:px-4 py-2 rounded-md whitespace-nowrap flex flex-col items-center"
                  >
                    <span style={{ color: item.color }} className="text-sm lg:text-base font-black tracking-wide leading-tight">{item.name}</span>
                    <span style={{ color: item.color }} className="text-xs leading-tight opacity-80">{item.nameTh}</span>
                    {showBar && (
                      <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full" style={{ backgroundColor: item.color, opacity: isActive ? 1 : 0.5 }} />
                    )}
                  </button>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  className="relative px-3 lg:px-4 py-2 rounded-md whitespace-nowrap flex flex-col items-center"
                >
                  <span style={{ color: item.color }} className="text-sm lg:text-base font-black tracking-wide leading-tight">{item.name}</span>
                  <span style={{ color: item.color }} className="text-xs leading-tight opacity-80">{item.nameTh}</span>
                  {showBar && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full" style={{ backgroundColor: item.color, opacity: isActive ? 1 : 0.5 }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* ===== Mobile Menu Toggle ===== */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Courses Desktop Dropdown ===== */}
      <AnimatePresence>
        {courseDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            onMouseEnter={() => { if (courseCloseTimer.current) clearTimeout(courseCloseTimer.current); setCourseDropdownOpen(true); setHoveredItem("Courses"); }}
            onMouseLeave={handleCoursesLeave}
            className="hidden md:block fixed top-20 md:top-24 rounded-b-xl border-x border-b border-white/10 overflow-hidden min-w-[240px]"
            style={{ left: courseDropdownLeft }}
          >
            {courseSubItems.map((sub, i) => (
              <Link key={i} href={sub.href}>
                <div className="relative px-5 py-3 bg-black/70 backdrop-blur-md cursor-pointer group">
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: sub.color }} />
                  <p className="text-xs text-white/50 font-medium tracking-wide">CODING & ROBOTICS COURSE</p>
                  <p style={{ color: sub.color }} className="font-black text-sm tracking-wide">
                    {sub.label} : {sub.age}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Achievements Desktop Dropdown ===== */}
      <AnimatePresence>
        {momentDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            onMouseEnter={() => { if (momentCloseTimer.current) clearTimeout(momentCloseTimer.current); setMomentDropdownOpen(true); setHoveredItem("Achievements & Activities"); }}
            onMouseLeave={handleMomentLeave}
            className="hidden md:block fixed top-20 md:top-24 rounded-b-xl border-x border-b border-white/10 overflow-hidden min-w-[240px]"
            style={{ left: momentDropdownLeft }}
          >
            {momentSubItems.map((sub, i) => (
              <Link key={i} href={sub.href}>
                <div className="relative px-5 py-3 bg-black/70 backdrop-blur-md cursor-pointer group">
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: sub.color }} />
                  <p className="text-xs text-white/50 font-medium tracking-wide">ACHIEVEMENTS & ACTIVITIES</p>
                  <p style={{ color: sub.color }} className="font-black text-sm tracking-wide">
                    {sub.label}
                    <span className="font-normal text-white/50 ml-1 text-xs">· {sub.labelTh}</span>
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Mobile Menu Dropdown ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg absolute top-full left-0 right-0 overflow-y-auto max-h-[calc(100vh-5rem)]"
            style={{ transformOrigin: "top center" }}
            variants={dropdownVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
              {menuItems.map((item, index) => (
                <motion.div key={item.name} custom={index} variants={menuItemVariants} initial="hidden" animate="show">
                  {item.name === "Courses" ? (
                    <div>
                      <button
                        onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                        className="block px-4 py-3 rounded-md w-full text-left"
                      >
                        <span style={{ color: item.color }} className="font-black text-sm tracking-wide block">{item.name}</span>
                        <span style={{ color: item.color }} className="text-xs opacity-80">{item.nameTh}</span>
                      </button>
                      <AnimatePresence>
                        {mobileCoursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 border-l border-white/10 ml-4 mb-2"
                          >
                            {courseSubItems.map((sub, i) => (
                              <Link key={i} href={sub.href} onClick={() => setIsOpen(false)}>
                                <div className="px-3 py-2">
                                  <p className="text-xs text-white/40">CODING & ROBOTICS COURSE</p>
                                  <p style={{ color: sub.color }} className="font-black text-sm">{sub.label} : {sub.age}</p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.name === "Achievements & Activities" ? (
                    <div>
                      <button
                        onClick={() => setMobileMomentOpen(!mobileMomentOpen)}
                        className="block px-4 py-3 rounded-md w-full text-left"
                      >
                        <span style={{ color: item.color }} className="font-black text-sm tracking-wide block">{item.name}</span>
                        <span style={{ color: item.color }} className="text-xs opacity-80">{item.nameTh}</span>
                      </button>
                      <AnimatePresence>
                        {mobileMomentOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 border-l border-white/10 ml-4 mb-2"
                          >
                            {momentSubItems.map((sub, i) => (
                              <Link key={i} href={sub.href} onClick={() => setIsOpen(false)}>
                                <div className="px-3 py-2">
                                  <p className="text-xs text-white/40">ACHIEVEMENTS & ACTIVITIES</p>
                                  <p style={{ color: sub.color }} className="font-black text-sm">{sub.label} · {sub.labelTh}</p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => { e.preventDefault(); handleNavigation(item); }}
                      className="block px-4 py-3 rounded-md w-full text-left"
                    >
                      <span style={{ color: item.color }} className="font-black text-sm tracking-wide block">{item.name}</span>
                      <span style={{ color: item.color }} className="text-xs opacity-80">{item.nameTh}</span>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
