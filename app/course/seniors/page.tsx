"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HEX = "#e08754";

export default function SeniorsCoursePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link href="/#courses">
          <motion.span
            style={{ color: HEX }}
            className="inline-flex items-center gap-1 font-semibold text-sm cursor-pointer hover:underline"
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2 }}
          >
            ‹ กลับหน้าหลัก
          </motion.span>
        </Link>
      </div>

      {/* Hero Header */}
      <motion.div
        className="text-center py-14 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white tracking-wide">
          CODING & ROBOTICS COURSE
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-1">
          <span style={{ color: HEX }}>SENIOR</span> : Ages 12+
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: HEX }} />
      </motion.div>

      {/* Description */}
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center space-y-4 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          EasyKids Coding & Robotics for SENIORS เหมาะสำหรับน้อง ๆ อายุ 12 ปีขึ้นไป
          โดยไม่จำเป็นต้องมีพื้นฐานมาก่อน
        </p>
        <p className="italic font-semibold text-gray-700 dark:text-gray-200">
           เรียนสนุก เข้าใจง่าย ได้ประสบการณ์ เน้นการลงมือทำ ทดลอง และแก้ไขปัญหาด้วยตัวเอง
        </p>
        <p>
          การเขียน Code อาจจะไม่สำเร็จในครั้งแรกที่เริ่มเขียน
          ในแต่ละภารกิจน้อง ๆ ได้รับโจทย์ น้อง ๆ จะต้อง...
        </p>
        <p>
          วิเคราะห์โจทย์ &gt;&gt; ลงมือเขียน Code &gt;&gt; ทดลอง &gt;&gt;
          หาข้อผิดพลาด &gt;&gt; แก้ไขปัญหา &gt;&gt; ทดลองซ้ำ &gt;&gt;
          ปรับแก้ไปเรื่อย ๆ จนภารกิจสำเร็จ
        </p>
        <p>
          ซึ่งกิจกรรมต่าง ๆ ของเราจะช่วยฝึกฝนน้อง ๆ ในเรื่องของ{" "}
          <strong className="text-gray-800 dark:text-white">ความพยายามและความอดทน</strong>
        </p>
        <p>
          การให้น้อง ๆ ได้เจอโจทย์และแก้ปัญหาบ่อย ๆ จะช่วยให้พวกเขาพัฒนาตัวเอง
          เกิดความมั่นใจ ไม่กลัว และไม่หนีปัญหา น้อง ๆ จะสามารถแก้ปัญหาได้
          รู้ที่มาที่ไปสาเหตุของปัญหา และค่อย ๆ หาวิธีแก้ หากวิธีนี้ไม่สำเร็จก็เปลี่ยนวิธีใหม่
          ทักษะนี้สามารถประยุกต์ใช้กับชีวิตจริงของพวกเขาได้
          ทำให้รู้สึกว่าทุกปัญหา มีทางออกเป็นการสร้างพื้นฐานการคิด
          และจิตใจให้เข้มแข็ง มีความพยายามมากขึ้น ให้น้อง ๆ
          พร้อมต่อยอดไปได้ในทุก ๆ เรื่อง ไม่ว่าการเข้าหาวิทยาลัย
          การทำงานในอนาคต หรือทำอะไรก็ตามในชีวิตของพวกเขา
        </p>
      </motion.div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.h3
          className="text-center text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          การเรียนรู้ของน้อง ๆ จะแบ่งเป็น 2 ส่วนหลัก
        </motion.h3>
        <div className="flex justify-center mb-10">
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: HEX }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ADVANCED CODING */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-1.5 w-full" style={{ backgroundColor: HEX }} />
            <div className="p-6 space-y-4">
              <h4 className="font-bold text-lg" style={{ color: HEX }}>ADVANCED CODING :</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                เรียนรู้การเขียนโปรแกรมคอมพิวเตอร์ด้วยภาษาขั้นสูง เรียนรู้ตั้งแต่พื้นฐานถึงการสร้างผลงาน
                โครงงาน หรือประดิษฐ์หุ่นยนต์ และสามารถทำได้จริง
                เป็นการปูพื้นฐานด้านวิศวกรรมเพื่อต่อยอดการศึกษาในระดับมหาวิทยาลัยต่อไป
              </p>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-2">
                  Programming Language :
                </p>
                <ul className="space-y-1">
                  {["Python", "C/C++", "Linux", "HTML", "Swift"].map((item) => (
                    <li key={item} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: HEX }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-2">
                  Coding Program :
                </p>
                <ul className="space-y-1">
                  {[
                    "Arduino IDE",
                    "Python",
                    "TinkerCad (3D)",
                    "ROS (Robot Operating System)",
                    "Engineering Design",
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: HEX }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ADVANCED ROBOTICS */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-1.5 w-full" style={{ backgroundColor: HEX }} />
            <div className="p-6 space-y-4">
              <h4 className="font-bold text-lg" style={{ color: HEX }}>ADVANCED ROBOTICS :</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                เรียนรู้ส่วนประกอบและระบบการทำงานของหุ่นยนต์
                รวมถึงการเขียนโปรแกรมควบคุมอุปกรณ์ต่าง ๆ ของหุ่นยนต์
                ฝึกการควบคุมหุ่นยนต์เพื่อทำกิจกรรมต่าง ๆ
                ส่งเสริมให้น้อง ๆ เข้าใจหลักการและความสำคัญของอุปกรณ์ทุกส่วนของหุ่นยนต์
                พร้อมทั้งสอดแทรกเนื้อหาทางด้านพื้นฐานวิศวกรรมเพื่อให้เป็นไปตามแนวการเรียนของวิชาวิทยาการคำนวณ
                และ STEAM Education (Science Technology Engineering Art Mathematics)
                รวมถึงเปิดโอกาสให้น้อง ๆ ได้เรียนรู้เทคโนโลยีใหม่ ๆ
                และรู้ทันเทคโนโลยี ซึ่งสามารถนำไปต่อยอดได้ในอนาคตได้
              </p>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-2">
                  อุปกรณ์ที่ใช้สอน :
                </p>
                <ul className="space-y-1">
                  {[
                    "Arduino Uno",
                    "K210",
                    "ESP32",
                    "Raspberry Pi",
                    "Arduino Robot",
                    "Robot Arm",
                    "ชุดอุปกรณ์อื่น ๆ อีกมากมาย",
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: HEX }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "/pictures/course/seniors-course/IMG_0720-768x576.jpg",
            "/pictures/course/seniors-course/Copy-of-IMG_6362-768x576.jpg",
          ].map((src, i) => (
            <motion.div
              key={src}
              className="relative w-full h-64 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Image src={src} alt={`Seniors course ${i + 1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
