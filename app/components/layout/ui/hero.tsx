"use client";
// components/layout/hero.tsx
import { motion, Variants } from "framer-motion";

/**
 * Hero Component
 * - แสดง background video พร้อม overlay
 * - ข้อความ heading มี animation fade-up ทีละบรรทัด (Framer Motion)
 * - ปุ่ม CTA มี animation delay ตามลำดับ
 */
export const Hero = () => {
  // ตัวอักษรสีสันสำหรับ "EASY KIDS" — สีตาม navbar (Home→Contact)
  const easyKidsColors = [
    { char: "E", color: "#c87df5" },
    { char: "A", color: "#878cf6" },
    { char: "S", color: "#6eb7e5" },
    { char: "Y", color: "#78bcaa" },
    { char: " ", color: "" },
    { char: "K", color: "#e4b82a" },
    { char: "I", color: "#e08754" },
    { char: "D", color: "#d74d5e" },
    { char: "S", color: "#a3a3a3" },
  ];

  // ===== Animation Variants =====
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center" id="home">
      {/* ========== 1. Background Video Section ========== */}
      <div className="absolute inset-0 -z-10 w-full h-full bg-black">
        {/* Background Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/videos/ek-videonologohero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay - ทำให้วิดีโอมืดลง เพื่อให้ข้อความอ่านง่ายขึ้น */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ========== 2. Main Content Container ========== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          className="max-w-2xl space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* ===== 2.1 Main Heading with Staggered Animation ===== */}
          <motion.h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
            {/* Line 1: "WE ARE" */}
            <motion.span
              className="inline-block text-white"
              variants={itemVariants}
            >
              WE ARE
            </motion.span>
            <br />

            {/* Line 2: "EASY KIDS" with colorful letters */}
            <motion.span className="inline-block" variants={itemVariants}>
              {easyKidsColors.map((item, index) => (
                <span
                  key={index}
                  style={item.color ? { color: item.color } : undefined}
                  className="font-extrabold inline-block text-white"
                >
                  {item.char}
                </span>
              ))}
            </motion.span>
            <br />

            {/* Line 3: "ROBOTICS" */}
            <motion.span
              className="inline-block text-white"
              variants={itemVariants}
            >
              ROBOTICS
            </motion.span>
          </motion.h1>

          {/* ===== 2.2 Description Section ===== */}
          <motion.div
            className="pl-4 border-l-2 border-orange-500"
            variants={itemVariants}
          >
            <p className="text-gray-200 text-md md:text-xl leading-relaxed">
              ศูนย์การเรียนรู้การเขียนโปรแกรมและนวัตกรรมหุ่นยนต์ เน้นการลงมือทำจริง EasyKids Robotics
            </p>
          </motion.div>

          {/* ===== 2.3 Call-to-Action Button ===== */}
          <motion.div variants={itemVariants}>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-sm group"
            >
              เรียนรู้เพิ่มเติม
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
