"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  images: string[];
  setSelectedImage: (src: string) => void;
}

export function PlaceTab({ images, setSelectedImage }: Props) {
  const [hero, ...rest] = images;
  return (
    <div className="max-w-4xl mx-auto space-y-3">
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
}
