"use client";
// เพิ่มการนำเข้า Suspense จาก react
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Reward_data } from "@/src/data/reward";
import { Clock, ChevronRight, X } from "lucide-react";
import { ClassTab } from "./class";
import { RobotsTab } from "./robots";
import { PlaceTab } from "./place";
import { ActivitiesTab } from "./activities";
import { AchievementsTab } from "./achievements";

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

const sortRewardsByDate = (rewards: Album[]) => {
  if (!rewards || !Array.isArray(rewards)) {
    return [];
  }

  return [...rewards].sort((a, b) => {
    const getYear = (dateStr: string | undefined) => {
      if (!dateStr) return 0;
      const yearMatch = dateStr.match(/\b(20\d{2})\b/);
      return yearMatch ? parseInt(yearMatch[1]) : 0;
    };
    
    const yearA = getYear(a.date);
    const yearB = getYear(b.date);
    return yearB - yearA; 
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
      thumbnail: "/pictures/moment-and-reward/place/mainPic.jpg",
      text: "EasyKids Robotics Coding & Robotics Learning Center",
      images: [
        "/pictures/moment-and-reward/place/mainPic.jpg",
        "/pictures/moment-and-reward/place/481084915_1143877667539566_439416908184743542_n.jpg",
        "/pictures/moment-and-reward/place/481173357_1143877610872905_2519315971267816348_n.jpg",
        "/pictures/moment-and-reward/place/481245019_1143877597539573_2125364573608562566_n.jpg",
        "/pictures/moment-and-reward/place/481262284_1143877637539569_8566909507504069389_n.jpg",
        "/pictures/moment-and-reward/place/481279245_1143877404206259_9107694821029795168_n.jpg",
        "/pictures/moment-and-reward/place/481288537_1143877634206236_7779569237147723270_n.jpg",
        "/pictures/moment-and-reward/place/481302233_1143877654206234_8417139135951192365_n.jpg",
        "/pictures/moment-and-reward/place/481319711_1143877600872906_2656197402790455492_n.jpg",
        "/pictures/moment-and-reward/place/481356759_1143877644206235_1299823932753315439_n.jpg",
        "/pictures/moment-and-reward/place/481899986_1143877630872903_4323169250270140444_n.jpg",
        "/pictures/moment-and-reward/place/481903974_1143877650872901_5630430244745879696_n.jpg",
        "/pictures/moment-and-reward/place/481908097_1143877670872899_7752487471213289100_n.jpg",
        "/pictures/moment-and-reward/place/481910353_1143877607539572_2898674926291834674_n.jpg",
        "/pictures/moment-and-reward/place/482025778_1143877594206240_7040841758028588803_n.jpg",
        "/pictures/moment-and-reward/place/482026391_1143877604206239_2705486079763349491_n.jpg",
      ],
    },
  ],
  rewards: sortRewardsByDate(Reward_data),
  events: [
    {
      id: 104,
      title: "TKB SMT Techno Robotics & Coding",
      thumbnail: "/pictures/moment-and-reward/activities/โรงเรียนธีรกานท์บ้านโฮ่ง จังหวัดลำพูน.jpg",
      text: "เด็กๆ ได้ลงมือเรียนรู้ผ่านการสร้างหุ่นยนต์ การเขียนโปรแกรม และการควบคุมหุ่นยนต์เพื่อทำภารกิจ รวมถึงการแก้ปัญหาจริงกับ 3in1 EasyKids Robot Kit ตั้งแต่พื้นฐานการทำงานของหุ่นยนต์ การเชื่อมต่ออุปกรณ์ ไปจนถึงการคิดวิเคราะห์และทำงานเป็นทีม",
      date: "14 มิถุนายน 2569",
      location: "โรงเรียนธีรกานท์บ้านโฮ่ง จังหวัดลำพูน",
      images: ["/pictures/moment-and-reward/activities/โรงเรียนธีรกานท์บ้านโฮ่ง จังหวัดลำพูน.jpg"],
      subActivities: [
        { id: 1, title: "การสร้างหุ่นยนต์", images: [] },
        { id: 2, title: "การเขียนโปรแกรม", images: [] },
        { id: 3, title: "การควบคุมหุ่นยนต์เพื่อทำภารกิจ", images: [] },
      ],
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
    {
      id: 102,
      title: "EasyKids RingMaster Challenge @ MRC 2026",
      thumbnail: "/pictures/moment-and-reward/activities/ringmaster-challenge.jpg",
      text: "การแข่งขันหุ่นยนต์ EasyKids RingMaster Challenge รวมเยาวชนจากหลากหลายสถาบัน ประชันทักษะการเขียนโปรแกรม การออกแบบกลไก และการควบคุมหุ่นยนต์เพื่อพิชิตภารกิจ Ring",
      date: "26 พฤษภาคม 2569",
      location: "",
      images: ["/pictures/moment-and-reward/activities/ringmaster-challenge.jpg"],
    },
    {
      id: 101,
      title: "REAI Showcase – Robotics Engineering & AI",
      thumbnail: "/pictures/moment-and-reward/activities/reai-showcase.jpg",
      text: "EasyKids Robotics ร่วมงาน REAI Showcase คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ ชมผลงานหุ่นยนต์และ AI ฝีมือนักศึกษาปี 4 พร้อมรับการประเมินจากภาคอุตสาหกรรมกว่า 40 หน่วยงาน",
      date: "6 มีนาคม 2569",
      location: "SMC Hall 2 คณะวิศวกรรมศาสตร์ มช.",
      images: ["/pictures/moment-and-reward/activities/reai-showcase.jpg"],
    },
  ],
};

type TabType = "class" | "robot" | "station" | "event" | "rewards";

// 1. แยกโค้ดเดิมที่ใช้ useSearchParams มาไว้ในคอมโพเนนต์ย่อยนี้
function MomentsContent() {
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

  const loadMoreRewards = () => {
    setVisibleRewardsCount((prev) => prev + 6);
  };

  const visibleRewards = galleryData.rewards.slice(0, visibleRewardsCount);
  const hasMoreRewards = visibleRewardsCount < galleryData.rewards.length;

  return (
    <div
      className={`bg-gray-50 min-h-screen pb-20 transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"}`}
    >
      {/* Header & Navigation */}
      <div className="sticky top-0 z-30 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 lg:px-6 flex items-center justify-between h-20 md:h-24">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white font-bold text-base hover:text-gray-300 transition-colors group shrink-0"
          >
            <ChevronRight className="rotate-180 w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            กลับหน้าหลัก
          </button>

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

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg absolute top-full left-0 right-0 overflow-y-auto overscroll-contain max-h-[calc(100vh-5rem)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn" } }}
            >
              <div className="px-4 sm:px-6 lg:px-8 pb-8">
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

        {activeTab === 'class' && (
          <ClassTab activities={galleryData.activities} setSelectedAlbum={setSelectedAlbum} />
        )}

        {activeTab === 'robot' && (
          <RobotsTab
            images={galleryData.activities.find((a) => a.id === 6)?.images ?? []}
            setSelectedImage={setSelectedImage}
          />
        )}

        {activeTab === 'station' && (
          <PlaceTab
            images={galleryData.activities.find((a) => a.id === 7)?.images ?? []}
            setSelectedImage={setSelectedImage}
          />
        )}

        {activeTab === 'event' && (
          <ActivitiesTab events={galleryData.events} />
        )}

        {activeTab === 'rewards' && (
          <AchievementsTab
            visibleRewards={visibleRewards}
            hasMoreRewards={hasMoreRewards}
            loadMoreRewards={loadMoreRewards}
            remaining={Math.min(6, galleryData.rewards.length - visibleRewardsCount)}
          />
        )}
      </main>

      {/* Modal Layer */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-6 py-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-4">
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

// 2. ตัวหลักของหน้าจะทำการ export default โดยห่อหุ้มคอมโพเนนต์ MomentsContent ไว้ข้างใน Suspense 
export default function MomentsPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-500 font-bold">
          กำลังโหลด...
        </div>
      }
    >
      <MomentsContent />
    </Suspense>
  );
}