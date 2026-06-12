"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Reward_data } from "@/src/data/reward";
import { Calendar, MapPin, Award, Clock, ChevronRight, X } from "lucide-react";

// --- Types ---
interface SubActivity {
  id: number;
  title: string;
  images: string[];
  description?: string;
  date?: string;
}

interface Album {
  id: number;
  title: string;
  thumbnail: string;
  text: string;
  images: string[];
  date?: string;
  location?: string;
  awardTitle?: string;
  winners?: string[];
  subActivities?: SubActivity[]; // สำหรับ Event ที่มีกิจกรรมย่อย
}

interface GalleryDataType {
  activities: Album[];
  rewards: Album[];
  events: Album[];
}

// ฟังก์ชันสำหรับเรียงลำดับรางวัลตามปี (ล่าสุดอยู่ด้านบน)
const sortRewardsByDate = (rewards: Album[]) => {
  return [...rewards].sort((a, b) => {
    // แปลงวันที่ให้เป็นปี โดยดึงปีจากสตริง
    const getYear = (dateStr: string | undefined) => {
      if (!dateStr) return 0;
      // หาตัวเลข 4 หลัก (ปี) ในสตริง
      const yearMatch = dateStr.match(/\b(20\d{2})\b/);
      return yearMatch ? parseInt(yearMatch[1]) : 0;
    };
    
    const yearA = getYear(a.date);
    const yearB = getYear(b.date);
    return yearB - yearA; // เรียงจากปีล่าสุดไปเก่าสุด
  });
};

// --- Data ---
const galleryData: GalleryDataType = {
  activities: [
    {
      id: 2,
      title: "คลาส Kids",
      thumbnail: "/pictures/moment-and-reward/kids/IMG_0001.jpg",
      text: "กิจกรรมการเรียนรู้สำหรับน้องๆ อายุ 5-7 ปี",
      images: [
        "/pictures/moment-and-reward/kids/IMG_0001.jpg",
        "/pictures/moment-and-reward/kids/IMG_0006-scaled.jpg",
        "/pictures/moment-and-reward/kids/IMG_0009-1-scaled.jpg",
        "/pictures/moment-and-reward/kids/IMG_0010-scaled.jpg",
        "/pictures/moment-and-reward/kids/IMG_0012.jpg",
        "/pictures/moment-and-reward/kids/IMG_0017.jpg",
        "/pictures/moment-and-reward/kids/IMG_0019-scaled.jpg",
        "/pictures/moment-and-reward/kids/IMG_0350-1.jpg",
        "/pictures/moment-and-reward/kids/IMG_0500-1-scaled.jpg",
      ],
    },
    {
      id: 3,
      title: "คลาส Juniors",
      thumbnail: "/pictures/moment-and-reward/juniors/IMG_0001-scaled.jpg",
      text: "กิจกรรมการเรียนรู้สำหรับน้องๆ อายุ 8-12 ปี",
      images: [
        "/pictures/moment-and-reward/juniors/IMG_0001-scaled.jpg",
        "/pictures/moment-and-reward/juniors/IMG_0010-scaled.jpg",
        "/pictures/moment-and-reward/juniors/IMG_0676-scaled.jpg",
        "/pictures/moment-and-reward/juniors/IMG_0718-scaled.jpg",
        "/pictures/moment-and-reward/juniors/IMG_0863-scaled.jpg",
        "/pictures/moment-and-reward/juniors/IMG_0975-scaled.jpg",
        "/pictures/moment-and-reward/juniors/IMG_0986-scaled.jpg",
        "/pictures/moment-and-reward/juniors/IMG_1142-scaled.jpg",
        "/pictures/moment-and-reward/juniors/IMG_1182-scaled.jpg",
      ],
    },
    {
      id: 4,
      title: "คลาส Seniors",
      thumbnail: "/pictures/moment-and-reward/seniors/IMG_0001-1.jpg",
      text: "กิจกรรมการเรียนรู้สำหรับน้องๆ อายุ 12 ปีขึ้นไป",
      images: [
        "/pictures/moment-and-reward/seniors/IMG_0001-1.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0002-scaled.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0003.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0004-scaled.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0005.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0006-scaled.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0007.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0010-1.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0011.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0012.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0015-scaled.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0017.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0328.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0410-scaled.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0638-scaled.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0715.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0719.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0720.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0725.jpg",
        "/pictures/moment-and-reward/seniors/IMG_0730.jpg",
        "/pictures/moment-and-reward/seniors/0011.jpg",
      ],
    },
    {
      id: 5,
      title: "คลาส Projects",
      thumbnail: "/pictures/moment-and-reward/projects/0001.jpg",
      text: "กิจกรรมออกแบบและประดิษฐ์หุ่นยนต์สำหรับน้องๆ อายุ 12 ปีขึ้นไป",
      images: [
        "/pictures/moment-and-reward/projects/0001.jpg",
        "/pictures/moment-and-reward/projects/0002-scaled.jpg",
        "/pictures/moment-and-reward/projects/0003-scaled.jpg",
        "/pictures/moment-and-reward/projects/0004-scaled.jpg",
        "/pictures/moment-and-reward/projects/0005-scaled.jpg",
        "/pictures/moment-and-reward/projects/0006-scaled.jpg",
        "/pictures/moment-and-reward/projects/0008.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_0412-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_2696-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_2768-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_2962-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_4379-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_4557-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_4652-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_5682-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_6362.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_6552.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_6559.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_7329-2-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_7477.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_7581-scaled.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_8228.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_8240.jpg",
        "/pictures/moment-and-reward/projects/Copy-of-IMG_8278.jpg",
      ],
    },
    {
      id: 6,
      title: "หุ่นยนต์และอุปกรณ์",
      thumbnail: "/pictures/moment-and-reward/robot/robot_01.jpg",
      text: "หุ่นยนต์และอุปกรณ์เพื่อการเรียนรู้",
      images: [
        "/pictures/moment-and-reward/robot/robot_01.jpg",
        "/pictures/moment-and-reward/robot/robot_02.jpg",
        "/pictures/moment-and-reward/robot/robot_03.jpg",
      ],
    },
    {
      id: 7,
      title: "สถานที่เรียน",
      thumbnail: "/pictures/moment-and-reward/station/721465362_973841798860526_5567708603152716272_n.jpg",
      text: "EasyKids Robotics Coding & Robotics Learning Center",
      images: [
        "/pictures/moment-and-reward/station/717200547_1917548895609090_6736944630095205875_n.jpg",
        "/pictures/moment-and-reward/station/721465362_973841798860526_5567708603152716272_n.jpg",
        "/pictures/moment-and-reward/station/720775758_3549590191865680_4810622963506079099_n.jpg",
        "/pictures/moment-and-reward/station/718674382_1531506575190419_3494274985599527837_n.jpg",
        "/pictures/moment-and-reward/station/717115017_4237851319861059_7263845058386050531_n.jpg",
        "/pictures/moment-and-reward/station/719899584_1357301262958077_5220662197406570121_n.jpg",
        "/pictures/moment-and-reward/station/722363324_1887266711966822_5471604521954566373_n.jpg",
        "/pictures/moment-and-reward/station/722406947_1000554122898314_6622005954083801438_n.jpg",
        "/pictures/moment-and-reward/station/718131107_3348946275266222_637304359523142809_n.jpg",
        "/pictures/moment-and-reward/station/721841047_3222924734575077_1138527598217169886_n.jpg",
      ],
    },
  ],
  // นำข้อมูลรางวัลจาก Reward_data มาใช้ และเรียงลำดับล่าสุดอยู่ด้านบน
  rewards: sortRewardsByDate(Reward_data),
  events: [
    {
      id: 101,
      title: "REAI Showcase – Robotics Engineering & AI",
      thumbnail: "/pictures/moment-and-reward/activities/reai-showcase.jpg",
      text: "EasyKids Robotics ร่วมงาน REAI Showcase คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ ชมผลงานหุ่นยนต์และ AI ฝีมือนักศึกษาปี 4 พร้อมรับการประเมินจากภาคอุตสาหกรรมกว่า 40 หน่วยงาน",
      date: "6 มีนาคม 2569",
      location: "SMC Hall 2 คณะวิศวกรรมศาสตร์ มช.",
      images: ["/pictures/moment-and-reward/activities/reai-showcase.jpg"],
    },
    {
      id: 102,
      title: "EasyKids RingMaster Challenge @ MRC 2026",
      thumbnail: "/pictures/moment-and-reward/activities/ringmaster-challenge.jpg",
      text: "การแข่งขันหุ่นยนต์ EasyKids RingMaster Challenge รวมเยาวชนจากหลากหลายสถาบัน ประชันทักษะการเขียนโปรแกรม การออกแบบกลไก และการควบคุมหุ่นยนต์เพื่อพิชิตภารกิจ Ring",
      date: "2026",
      location: "",
      images: ["/pictures/moment-and-reward/activities/ringmaster-challenge.jpg"],
    },
    {
      id: 103,
      title: "EasyKids Drone Inspiration Workshop",
      thumbnail: "/pictures/moment-and-reward/activities/drone-workshop.jpg",
      text: "Workshop Drone สำหรับนักเรียนมัธยมศึกษา ณ โรงเรียนดอยเต่าวิทยาคม เรียนรู้ทั้งภาคทฤษฎีและภาคปฏิบัติ ตั้งแต่พื้นฐานการบินไปจนถึงฝึกบินจริงผ่านภารกิจต่าง ๆ",
      date: "9 มิถุนายน 2569",
      location: "โรงเรียนดอยเต่าวิทยาคม จ.เชียงใหม่",
      images: ["/pictures/moment-and-reward/activities/drone-workshop.jpg"],
    },
  ],
};



type TabType = "class" | "robot" | "station" | "event" | "rewards";

export default function MomentsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    const tab = searchParams.get("tab");
    return (["class", "robot", "station", "event", "rewards"].includes(tab ?? "") ? tab : "class") as TabType;
  });

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["class", "robot", "station", "event", "rewards"].includes(tab)) {
      setActiveTab(tab as TabType);
    }
  }, [searchParams]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedSub, setSelectedSub] = useState<SubActivity | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [visibleRewardsCount, setVisibleRewardsCount] = useState(6);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleBack = async () => {
    if (isExiting) return;
    setIsExiting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    router.back();
  };

  // ฟังก์ชันโหลดรางวัลเพิ่ม
  const loadMoreRewards = () => {
    setVisibleRewardsCount((prev) => prev + 6); // โหลดเพิ่มครั้งละ 6 รายการ
  };

  // รางวัลที่แสดงในปัจจุบัน
  const visibleRewards = galleryData.rewards.slice(0, visibleRewardsCount);
  const hasMoreRewards = visibleRewardsCount < galleryData.rewards.length;

  return (
    <div
      className={`bg-gray-50 min-h-screen pb-20 transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"}`}
    >
      {/* 1. Header & Navigation */}
      <div className="sticky top-0 z-30 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 lg:px-6 flex items-center justify-between h-20 md:h-24">
          {/* Back button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white font-bold text-base hover:text-gray-300 transition-colors group shrink-0"
          >
            <ChevronRight className="rotate-180 w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            กลับหน้าหลัก
          </button>

          {/* Desktop Tabs */}
          <div className="hidden md:flex items-center gap-0 lg:gap-1">
            {([
              { key: "class",   en: "Class",       th: "คลาส",         hex: "#c87df5" },
              { key: "robot",   en: "Robots",       th: "หุ่นยนต์",      hex: "#878cf6" },
              { key: "station", en: "Place",        th: "สถานที่เรียน",  hex: "#6eb7e5" },
              { key: "event",   en: "Activities",   th: "กิจกรรม",       hex: "#78bcaa" },
              { key: "rewards", en: "Achievements", th: "รางวัล",        hex: "#e4b82a" },
            ] as const).map(({ key, en, th, hex }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className="px-3 lg:px-4 py-2 whitespace-nowrap flex flex-col items-center"
              >
                <span
                  style={{ color: hex }}
                  className="text-sm lg:text-base font-black tracking-wide leading-tight"
                >
                  {en}
                </span>
                <span
                  style={{ color: hex }}
                  className="text-xs leading-tight opacity-80"
                >
                  {th}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isMobileOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              className="md:hidden bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg absolute top-full left-0 right-0 overflow-hidden"
              style={{ transformOrigin: "top center" }}
              initial={{ opacity: 0, height: 0, scaleY: 0.95 }}
              animate={{ opacity: 1, height: "auto", scaleY: 1, transition: { duration: 0.3, ease: "easeOut" } }}
              exit={{ opacity: 0, height: 0, scaleY: 0.95, transition: { duration: 0.25, ease: "easeIn" } }}
            >
              <div className="px-4 sm:px-6 lg:px-8">
                {([
                  { key: "class",   en: "Class",     th: "คลาส",         hex: "#c87df5" },
                  { key: "robot",   en: "Robots",       th: "หุ่นยนต์",      hex: "#878cf6" },
                  { key: "station", en: "Place",      th: "สถานที่เรียน",  hex: "#6eb7e5" },
                  { key: "event",   en: "Activities",   th: "กิจกรรม",       hex: "#78bcaa" },
                  { key: "rewards", en: "Achievements", th: "รางวัล",        hex: "#e4b82a" },
                ] as const).map(({ key, en, th, hex }, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: index * 0.05, duration: 0.3 } }}
                  >
                    <button
                      onClick={() => { setActiveTab(key); setIsMobileOpen(false); }}
                      className="block px-4 py-3 rounded-md w-full text-left"
                    >
                      <span
                        style={{ color: hex }}
                        className="font-black text-sm tracking-wide block"
                      >
                        {en}
                      </span>
                      <span
                        style={{ color: hex }}
                        className="text-xs opacity-80"
                      >
                        {th}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main className="px-4 mt-6">
        <h1 className="text-3xl font-black mb-4 text-center text-gray-900 tracking-tight">
          {{
            class: "CLASS",
            robot: "ROBOTS",
            station: "PLACE",
            event: "ACTIVITIES",
            rewards: "ACHIEVEMENTS",
          }[activeTab]}
        </h1>

        {/* Tab: คลาส */}
        {activeTab === 'class' && (() => {
          const colorMap: Record<number, string> = {
            2: "text-blue-400",
            3: "text-emerald-400",
            4: "text-orange-400",
            5: "text-rose-400",
          };
          return (
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 h-[55vh]">
              {galleryData.activities
                .filter((a) => [2, 3, 4, 5].includes(a.id))
                .map((album, i) => (
                  <motion.div
                    key={album.id}
                    onClick={() => setSelectedAlbum(album)}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all h-full"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image src={album.thumbnail} alt={album.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm rounded-b-2xl">
                      <h3 className={`text-base font-black leading-tight ${colorMap[album.id] ?? "text-white"}`}>{album.title}</h3>
                      <p className="text-white/70 text-xs line-clamp-1 mt-0.5">{album.text}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          );
        })()}

        {/* Tab: หุ่นยนต์และอุปกรณ์ */}
        {activeTab === 'robot' && (
          <div className="max-w-4xl mx-auto space-y-3">
            {/* 4 รูปใหม่ — hero 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {galleryData.activities.find((a) => a.id === 6)?.images.slice(0, 4).map((src, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-zoom-in group"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  onClick={() => setSelectedImage(src)}
                >
                  <Image src={src} alt={`robot-${i}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>

            {/* รูปทั้งหมด — grid สม่ำเสมอ */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
              {galleryData.activities.find((a) => a.id === 6)?.images.slice(4).map((src, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-zoom-in group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: i * 0.02 }}
                  onClick={() => setSelectedImage(src)}
                >
                  <Image src={src} alt={`robot-${i + 4}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: สถานที่เรียน */}
        {activeTab === 'station' && (() => {
          const imgs = galleryData.activities.find((a) => a.id === 7)?.images ?? [];
          const [hero, ...rest] = imgs;
          return (
            <div className="max-w-4xl mx-auto space-y-3">
              {/* รูปใหญ่บนสุด */}
              {hero && (
                <motion.div
                  className="relative w-full h-[55vh] rounded-2xl overflow-hidden cursor-zoom-in group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(hero)}
                >
                  <Image src={hero} alt="station-0" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </motion.div>
              )}
              {/* กริดรูปเล็ก */}
              <div className="grid grid-cols-3 gap-3">
                {rest.map((src, i) => (
                  <motion.div
                    key={i}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image src={src} alt={`station-${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Tab: กิจกรรม + รางวัล — card style เดียวกันทุกอย่าง */}
        {(activeTab === 'event' || activeTab === 'rewards') && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(activeTab === 'rewards' ? visibleRewards : galleryData.events).map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                >
                  {/* รูปภาพ */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    {/* วันที่ badge บนรูป */}
                    {item.date && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        <Calendar size={11} />
                        {item.date}
                      </div>
                    )}
                    {/* location badge */}
                    {item.location && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                        <MapPin size={11} />
                        {item.location}
                      </div>
                    )}
                  </div>

                  {/* เนื้อหา */}
                  <div className="p-5">
                    <h3 className="text-base font-black text-gray-900 leading-snug mb-1 group-hover:text-amber-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    {item.text && (
                      <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.text}</p>
                    )}

                    {/* Award badge */}
                    {item.awardTitle && (
                      <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 mb-3">
                        <Award size={15} className="text-amber-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-amber-700 font-bold text-xs">{item.awardTitle}</p>
                          {item.winners && (
                            <p className="text-amber-600 text-xs mt-0.5 leading-relaxed">{item.winners.join(' · ')}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Sub-activities */}
                    {item.subActivities && item.subActivities.length > 0 && (
                      <div className="border-t border-gray-100 pt-3 mt-1 space-y-1.5">
                        {item.subActivities.map((sub) => (
                          <div key={sub.id} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            <div>
                              <p className="text-xs font-semibold text-gray-700">{sub.title}</p>
                              {sub.description && <p className="text-xs text-gray-400 mt-0.5">{sub.description}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {activeTab === 'event' && galleryData.events.length === 0 && (
                <p className="col-span-3 text-center text-gray-400 py-16 text-sm">กำลังเพิ่มข้อมูลกิจกรรม — Coming Soon</p>
              )}
            </div>
            {activeTab === 'rewards' && hasMoreRewards && (
              <div className="flex justify-center mt-12">
                <motion.button
                  onClick={loadMoreRewards}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  โหลดเพิ่มอีก {Math.min(6, galleryData.rewards.length - visibleRewardsCount)} รายการ
                </motion.button>
              </div>
            )}
          </>
        )}
      </main>

      {/* 3. Modal Layer - รองรับการย้อนกลับหลายชั้น */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            {/* Modal Header (แถบด้านบน) */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-6 py-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-4">
                {/* ✅ ปุ่มย้อนกลับอัจฉริยะ */}
                <button
                  onClick={() =>
                    selectedSub ? setSelectedSub(null) : setSelectedAlbum(null)
                  }
                  className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 font-bold"
                >
                  <ChevronRight className="rotate-180 w-5 h-5" />
                  {selectedSub ? "กลับไปหน้าอัลบั้ม" : "ปิด"}
                </button>

                <div className="h-6 w-px bg-gray-200 mx-2" />

                <div>
                  <h2 className="text-xl font-black text-gray-900 leading-none">
                    {selectedSub ? selectedSub.title : selectedAlbum.title}
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    {selectedSub
                      ? `ในอัลบั้ม: ${selectedAlbum.title}`
                      : selectedAlbum.text}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedSub(null);
                  setSelectedAlbum(null);
                }}
                className="p-2 bg-gray-100 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="max-w-7xl mx-auto p-6">
              {/* --- ส่วนที่ 1: หน้าแสดงรายการกิจกรรมย่อย (ถ้ามี) --- */}
              {selectedAlbum.subActivities && !selectedSub && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedAlbum.subActivities.map((sub) => (
                    <motion.div
                      key={sub.id}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedSub(sub)}
                      className="cursor-pointer group bg-gray-50 rounded-2xl p-4 border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all"
                    >
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                        <Image
                          src={sub.images[0]}
                          alt={sub.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 flex items-center justify-between">
                        {sub.title}
                        <ChevronRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {sub.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                        <Clock className="w-3 h-3" /> {sub.date}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* --- ส่วนที่ 2: หน้าแสดงรูปภาพทั้งหมด (เมื่อกดเข้าไปใน Sub หรือ อัลบั้มปกติที่ไม่มี Sub) --- */}
              {(selectedSub || !selectedAlbum.subActivities) && (
                <div className="columns-2 md:columns-4 gap-3 space-y-3">
                  {(selectedSub
                    ? selectedSub.images
                    : selectedAlbum.images
                  ).map((img, idx) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={idx}
                      className="relative break-inside-avoid rounded-xl overflow-hidden shadow-sm group cursor-zoom-in"
                    >
                      <Image
                        src={img}
                        alt="gallery-detail"
                        width={800}
                        height={1200}
                        className="w-full h-auto object-cover hover:brightness-110 transition-all"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox สำหรับรูปเดี่ยว */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="preview"
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
