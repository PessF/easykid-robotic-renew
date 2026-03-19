"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Reward_data } from "@/src/data/reward";
import {
  Calendar,
  MapPin,
  Award,
  Users,
  Clock,
  ChevronRight,
  X,
} from "lucide-react";

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

// --- Data (ตัวอย่างการจัดโครงสร้างใหม่) ---
const galleryData: GalleryDataType = {
  activities: [
    {
      id: 1,
      title: "กิจกรรม Event ประจำปี",
      thumbnail: "/pictures/moment-and-reward/event/cover.jpg",
      text: "รวมภาพบรรยากาศงาน Event ใหญ่ของเรา",
      images: [],
      subActivities: [
        {
          id: 101,
          title: "Workshop หุ่นยนต์เดินตามเส้น",
          date: "12 ม.ค. 2024",
          images: [
            "/pictures/moment-and-reward/event/event1.jpg",
            "/pictures/moment-and-reward/event/event2.jpg",
          ],
          description: "น้องๆ สนุกกับการเขียนโปรแกรมควบคุมเซนเซอร์",
        },
        {
          id: 102,
          title: "แข่งขันทักษะคอมพิวเตอร์",
          date: "15 ม.ค. 2024",
          images: [
            "/pictures/moment-and-reward/event/event3.jpg",
            "/pictures/moment-and-reward/event/event4.jpg",
          ],
          description: "การประชันไหวพริบด้าน Logic",
        },
      ],
    },
    // ... ข้อมูลเดิมของคุณ ...
    {
      id: 2,
      title: "คลาส Kids",
      thumbnail: "/pictures/moment-and-reward/kids/cover.jpg",
      text: "กิจกรรมการเรียนรู้สำหรับน้องๆ อายุ 5-7 ปี",
      images: [
        "/pictures/moment-and-reward/kids/IMG_0001-300x300.jpg",
        "/pictures/moment-and-reward/kids/IMG_0002-300x300.jpg",
        "/pictures/moment-and-reward/kids/IMG_0003-300x300.jpg",
      ],
    },
  ],
  // นำข้อมูลรางวัลจาก Reward_data มาใช้ และเรียงลำดับล่าสุดอยู่ด้านบน
  rewards: sortRewardsByDate(Reward_data),
};



export default function MomentsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] =
    useState<keyof GalleryDataType>("activities");
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedSub, setSelectedSub] = useState<SubActivity | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [visibleRewardsCount, setVisibleRewardsCount] = useState(6); // โหลดครั้งละ 6 รายการ

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
      {/* 1. Header & Navigation (Fixed) */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 font-bold text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ChevronRight className="rotate-180 w-5 h-5" /> ย้อนกลับ
          </button>

          <div className="flex bg-gray-100 p-1 rounded-xl">
            {(["activities", "rewards"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
              >
                {tab === "activities" ? "กิจกรรม" : "รางวัล"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 mt-12">
        <h1 className="text-4xl font-black mb-8 text-center text-gray-900 tracking-tight">
          {activeTab === "activities" ? "MOMENTS" : "ACHIEVEMENTS"}
        </h1>

        {/* 2. Main Grid - สำหรับ Activities (ยังคงแบบเดิม) */}
        {activeTab === 'activities' && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryData.activities.map((album) => (
              <motion.div
                key={album.id}
                layoutId={`album-${album.id}`}
                onClick={() => setSelectedAlbum(album)}
                className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all"
              >
                <Image
                  src={album.thumbnail}
                  alt={album.title}
                  width={600}
                  height={800}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{album.title}</h3>
                  <p className="text-sm opacity-80 line-clamp-1">{album.text}</p>
                  {album.subActivities && (
                    <span className="inline-block mt-2 text-[10px] bg-blue-600 px-2 py-0.5 rounded-full font-bold uppercase">
                      {album.subActivities.length} Events Inside
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 3. Rewards Grid - แสดงข้อมูลรางวัลแบบ Load More */}
        {activeTab === 'rewards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleRewards.map((reward) => (
              <motion.div
                key={reward.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                {/* รูป thumbnail */}
                <div className="relative mb-4 rounded-xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={reward.thumbnail}
                    alt={reward.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* ข้อมูลรางวัล */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {reward.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {reward.text}
                </p>
                
                {/* วันที่และสถานที่ */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  <Calendar size={16} className="group-hover:text-blue-500 transition-colors duration-300" />
                  <span>{reward.date}</span>
                  {reward.location && (
                    <>
                      <span>•</span>
                      <MapPin size={16} className="group-hover:text-red-500 transition-colors duration-300" />
                      <span>{reward.location}</span>
                    </>
                  )}
                </div>

                {/* รางวัลและผู้ชนะ */}
                {reward.awardTitle && (
                  <div className="bg-linear-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4 mb-4 group-hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-amber-700 font-semibold mb-2">
                      <Award size={18} className="text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:text-amber-800 transition-colors duration-300">
                        {reward.awardTitle}
                      </span>
                    </div>
                    {reward.winners && (
                      <p className="text-amber-600 text-sm group-hover:text-amber-800 transition-colors duration-300">
                        {reward.winners.join(', ')}
                      </p>
                    )}
                  </div>
                )}

                {/* กิจกรรมย่อย (ถ้ามี) */}
                {reward.subActivities && reward.subActivities.length > 0 && (
                  <div className="border-t border-gray-100 pt-4 mt-4 group-hover:border-blue-100 transition-colors duration-300">
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 group-hover:text-blue-600 transition-colors duration-300">
                      <Users size={18} className="group-hover:scale-110 transition-transform duration-300" />
                      รายละเอียดรางวัล
                    </h4>
                    <div className="space-y-3">
                      {reward.subActivities.map((sub) => (
                        <div 
                          key={sub.id} 
                          className="bg-linear-to-r from-gray-50 to-blue-50 rounded-xl p-3 border border-gray-100 group-hover:border-blue-200 transition-all duration-300 hover:shadow-sm"
                        >
                          <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                            {sub.title}
                          </p>
                          {sub.description && (
                            <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mt-1">
                              {sub.description}
                            </p>
                          )}
                 INEX       </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* ปุ่ม Load More สำหรับรางวัล */}
        {activeTab === 'rewards' && hasMoreRewards && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={loadMoreRewards}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              โหลดเพิ่มอีก {Math.min(6, galleryData.rewards.length - visibleRewardsCount)} รายการ
            </motion.button>
          </div>
        )}

        {/* แสดงข้อความเมื่อโหลดครบทั้งหมดแล้ว */}
        {activeTab === 'rewards' && !hasMoreRewards && visibleRewards.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              แสดงรางวัลทั้งหมด {galleryData.rewards.length} รายการแล้ว
            </p>
          </div>
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
    </div>
  );
}
