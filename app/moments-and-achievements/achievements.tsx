"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Award } from "lucide-react";

export interface RewardAlbum {
  id: number;
  title: string;
  thumbnail: string;
  text: string;
  images: string[];
  date?: string;
  location?: string;
  awardTitle?: string;
  winners?: string[];
}

interface Props {
  visibleRewards: RewardAlbum[];
  hasMoreRewards: boolean;
  loadMoreRewards: () => void;
  remaining: number;
}

export function AchievementsTab({ visibleRewards, hasMoreRewards, loadMoreRewards, remaining }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleRewards.map((item, idx) => (
          <motion.div
            key={item.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              {item.date && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  <Calendar size={11} /> {item.date}
                </div>
              )}
              {item.location && (
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                  <MapPin size={11} /> {item.location}
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-base font-black text-gray-900 leading-snug mb-1 group-hover:text-amber-600 transition-colors duration-200">{item.title}</h3>
              {item.text && <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.text}</p>}
              {item.awardTitle && (
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5">
                  <Award size={15} className="text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-amber-700 font-bold text-xs">{item.awardTitle}</p>
                    {item.winners && <p className="text-amber-600 text-xs mt-0.5 leading-relaxed">{item.winners.join(' · ')}</p>}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {hasMoreRewards && (
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={loadMoreRewards}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            โหลดเพิ่มอีก {remaining} รายการ
          </motion.button>
        </div>
      )}
    </>
  );
}
