"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        
        {/* 1. หน้าจอ Overlay สีดำ (Fade In/Out) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-black z-100 flex items-center justify-center pointer-events-none"
        >
          {/* 2. Icon Loading (หมุนๆ) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: 1 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-col items-center gap-4"
          >
            {/* SVG Icon Download/Loading */}
            <svg 
              className="w-12 h-12 text-purple-500 animate-spin" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
            </svg>
            <span className="text-white text-xs font-bold tracking-widest uppercase">Loading</span>
          </motion.div>
        </motion.div>
        
        {/* 3. เนื้อหาหน้าเว็บ (ค่อยๆ ปรากฏ) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}