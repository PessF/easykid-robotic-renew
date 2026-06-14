"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Award } from "lucide-react";

interface SubActivity {
  id: number;
  title: string;
  images: string[];
  description?: string;
  date?: string;
}

export interface EventAlbum {
  id: number;
  title: string;
  thumbnail: string;
  text: string;
  images: string[];
  date?: string;
  location?: string;
  awardTitle?: string;
  winners?: string[];
  subActivities?: SubActivity[];
}

interface Props {
  events: EventAlbum[];
}

export function ActivitiesTab({ events }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {events.map((item, idx) => (
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
              <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 mb-3">
                <Award size={15} className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-amber-700 font-bold text-xs">{item.awardTitle}</p>
                  {item.winners && <p className="text-amber-600 text-xs mt-0.5 leading-relaxed">{item.winners.join(' · ')}</p>}
                </div>
              </div>
            )}
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
      {events.length === 0 && (
        <p className="col-span-3 text-center text-gray-400 py-16 text-sm">กำลังเพิ่มข้อมูลกิจกรรม — Coming Soon</p>
      )}
    </div>
  );
}
