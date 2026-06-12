"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Target, Lightbulb, Rocket, Trophy } from "lucide-react";

const HEX = "#e08754";

export const About = () => {
  const logos = [
    { src: "/pictures/sup/arduino-logo.png", alt: "Arduino" },
    { src: "/pictures/sup/microbit-logo.png", alt: "micro:bit" },
    { src: "/pictures/sup/scratch-logo.png", alt: "Scratch" },
    { src: "/pictures/sup/python-logo.png", alt: "Python" },
    { src: "/pictures/sup/raspberrypi-logo.png", alt: "Raspberry Pi" },
    { src: "/pictures/sup/mblock-logo.png", alt: "mBlock" },
    { src: "/pictures/sup/pictoblox-logo.png", alt: "PictoBlox" },
    { src: "/pictures/sup/makeblock-logo.png", alt: "Makeblock" },
    { src: "/pictures/sup/blynk-logo.png", alt: "Blynk" },
    { src: "/pictures/sup/tinkercad-logo.png", alt: "Tinkercad" },
    { src: "/pictures/sup/c++-logo.png", alt: "C++" },
    { src: "/pictures/sup/ros-logo.png", alt: "ROS" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: `${HEX}18` }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: `${HEX}12` }} />
      </div>

      {/* Robot images */}
      <div className="absolute inset-0 pointer-events-none hidden 2xl:block max-w-480 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute left-10 top-1/3 w-80 h-80"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center backdrop-blur-sm rounded-3xl"
          >
            <Image src="/pictures/robo2.png" alt="Robot" fill className="object-contain" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute right-10 top-1/2 w-80 h-80"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
            className="w-full h-full flex items-center justify-center backdrop-blur-sm rounded-3xl scale-x-[-1]"
          >
            <Image src="/pictures/robo1.png" alt="Robot" fill className="object-contain" />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
              ศูนย์การเรียนรู้การเขียนโปรแกรม <br />
              <span style={{ color: HEX }}>และนวัตกรรมหุ่นยนต์</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide" style={{ color: HEX }}>
              EasyKids Robotics
            </p>
          </motion.div>

          {/* Main content */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  EasyKids Robotics ก่อตั้งขึ้นเมื่อปี 2556
                  โดยมุ่งมั่นที่ต้องการส่งต่อประสบการณ์การแข่งขันหุ่นยนต์ระดับนานาชาติ
                  สู่แนวทางการเรียนรู้ที่จับต้องได้จริง
                </p>
                <p className="text-lg leading-relaxed">
                  เจตจำนงของเราไม่ใช่เพียงแค่การสอนเขียนโปรแกรม
                  แต่คือการสร้างพื้นที่ให้เด็กๆ
                  ได้ปลดปล่อยจินตนาการผ่านการสร้างสรรค์นวัตกรรม
                </p>
              </div>

              {/* Highlight quote */}
              <div
                className="p-6 rounded-lg border"
                style={{ backgroundColor: `${HEX}12`, borderColor: `${HEX}40` }}
              >
                <p className="italic text-lg font-medium" style={{ color: HEX }}>
                   เรียนสนุก เข้าใจง่าย ได้ประสบการณ์ เน้นการลงมือทำ ทดลอง
                  และแก้ไขปัญหาด้วยตัวเอง
                </p>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  เราเชื่อมั่นในพลังของการ{" "}
                  <span className="font-semibold" style={{ color: HEX }}>
                    เรียนรู้ผ่านการลงมือทำ
                  </span>{" "}
                  (Learning by Doing)
                  โดยมุ่งเน้นการฝึกให้เด็กเผชิญหน้าและแก้ปัญหาด้วยตัวเอง
                </p>
                <p className="text-lg leading-relaxed">
                  ทักษะการคิดอย่างเป็นระบบและการไม่ย่อท้อต่ออุปสรรคจะเป็นเข็มทิศสำคัญที่ช่วยให้พวกเขาประสบความสำเร็จในอนาคต
                </p>
              </div>

              {/* Key features */}
              <div className="space-y-3">
                {[
                  { icon: <Target className="w-5 h-5" style={{ color: HEX }} />, text: "ทักษะการแก้ปัญหาเชิงระบบ" },
                  { icon: <Lightbulb className="w-5 h-5" style={{ color: HEX }} />, text: "การสร้างสรรค์นวัตกรรม" },
                  { icon: <Rocket className="w-5 h-5" style={{ color: HEX }} />, text: "การทำงานเป็นทีม" },
                  { icon: <Trophy className="w-5 h-5" style={{ color: HEX }} />, text: "ความมั่นใจในการประสบความสำเร็จ" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    {feature.icon}
                    <span className="text-lg">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-1 rounded-full"
            style={{ background: `linear-gradient(to right, transparent, ${HEX}60, transparent)` }}
          />

          {/* Partners Logo Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center">
              พัฒนาเด็กด้วยเพลตฟอร์มชั้นนำของโลกด้านหุ่นยนต์และการเขียนโปรแกรม
            </h3>

            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />

              <motion.div
                className="flex"
                animate={{ x: [0, -1920] }}
                transition={{
                  x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" },
                }}
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="shrink-0 mx-5 flex items-center justify-center h-24 w-32 rounded-lg backdrop-blur-sm transition-colors duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={45}
                      className="object-contain max-w-24 h-auto"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
