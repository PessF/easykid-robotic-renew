"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Album {
  id: number;
  title: string;
  thumbnail: string;
  text: string;
  images: string[];
}

interface Props {
  activities: Album[];
  setSelectedAlbum: (album: Album) => void;
}

const colorMap: Record<number, string> = {
  2: "text-blue-400",
  3: "text-emerald-400",
  4: "text-orange-400",
  5: "text-rose-400",
};

export function ClassTab({ activities, setSelectedAlbum }: Props) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 h-[55vh]">
      {activities
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
}
