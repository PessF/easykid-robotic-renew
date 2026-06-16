"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  images: string[];
  setSelectedImage: (src: string) => void;
}

export function RobotsTab({ images, setSelectedImage }: Props) {
  return (
    <div className="max-w-4xl mx-auto space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {images.slice(0, 4).map((src, i) => (
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
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {images.slice(4).map((src, i) => (
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
  );
}
