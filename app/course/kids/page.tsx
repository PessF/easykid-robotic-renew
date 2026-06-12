"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Computer Skills",
    color: "#3b82f6",
    description:
      "เรียนรู้การใช้งานคอมพิวเตอร์ และอุปกรณ์ต่าง ๆ ที่ทำงานร่วมกับคอมพิวเตอร์ เช่น การเปิดและปิดคอมพิวเตอร์ การเชื่อมต่ออุปกรณ์คอมพิวเตอร์ต่าง ๆ การใช้ Mouse เป็นต้น",
  },
  {
    title: "Unplugged Coding",
    color: "#ec4899",
    description:
      "สร้างความเข้าใจพื้นฐานของวิทยาการคอมพิวเตอร์โดยไม่จำเป็นต้องใช้ Computer สอนผ่านกิจกรรมที่หลากหลาย การเล่นที่สนุกสนาน เช่น บัตรคำ ปริศนา บอร์ดเกมดนสอส อุปกรณ์ และสิ่งของต่าง ๆ รอบตัวมาประกอบกัน รวมถึงกิจกรรมต่าง ๆ ทางร่างกาย เพื่อเป็นสื่อในการแก้ปัญหา ทำให้เกิดการเรียนรู้เข้าใจหลักการพื้นฐานของวิทยาการคอมพิวเตอร์ ฝึกให้เด็กคิดแก้ปัญหาอย่างเป็นระบบ พัฒนาแนวทางแก้ปัญหาอย่างเป็นขั้นเป็นตอน และฝึกให้เด็กๆ ได้ใช้ความคิดสร้างสรรค์",
  },
  {
    title: "Basic Block-Based Coding",
    color: "#f97316",
    description: "เรียนรู้การเขียนโปรแกรมที่หลากหลาย",
    items: [
      "Block-Based Coding",
      "MakeCode",
      "mBlock5",
      "Scratch",
      "PictoBlox (AI)",
      "TinkerCad (3D Modelling)",
    ],
  },
  {
    title: "Basic Robotics",
    color: "#22c55e",
    description:
      "เรียนรู้ส่วนประกอบและระบบการทำงานของหุ่นยนต์ รวมถึงการเขียนโปรแกรมควบคุมอุปกรณ์ต่างๆ ของหุ่นยนต์ ฝึกการควบคุมหุ่นยนต์เพื่อทำกิจกรรมต่างๆ ส่งเสริมให้น้องๆ เข้าใจหลักการและความสำคัญของอุปกรณ์ทุกส่วนของหุ่นยนต์ พร้อมสอดแทรกเนื้อหาวิศวกรรมเพื่อให้เป็นไปตามแนวการเรียนของวิชาวิทยาการคำนวณ",
  },
];

export default function KidsCoursePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link href="/#courses">
          <motion.span
            className="inline-flex items-center gap-1 text-blue-500 font-semibold text-sm cursor-pointer hover:underline"
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
          <span className="text-blue-500">KIDS</span> : Ages 5-7
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-blue-500" />
      </motion.div>

      {/* Description */}
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center space-y-4 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          EasyKids Coding & Robotics for KIDS เหมาะสำหรับน้อง ๆ รุ่นเล็ก อายุ 5-7 ปี
          โดยไม่จำเป็นต้องมีพื้นฐานมาก่อน
        </p>
        <p>
          EasyKids Robotics จะสอนให้น้อง ๆ ลงมือทำ ทดลอง และแก้ไขปัญหาด้วยตัวเอง
          การให้น้อง ๆ ได้เจอโจทย์และแก้ปัญหาบ่อย ๆ จะช่วยให้พวกเขาพัฒนาตัวเอง
          เกิดความมั่นใจ ไม่กลัว และไม่หนีปัญหา
        </p>
        <p>
          น้อง ๆ จะสามารถแก้ปัญหาได้ รู้ที่มาที่ไป สาเหตุของปัญหา และค่อย ๆ
          หาวิธีแก้ หากวิธีนี้ไม่สำเร็จก็เปลี่ยนวิธีใหม่ ทักษะนี้สามารถประยุกต์ใช้กับชีวิตจริงของพวกเขาได้
          ทำให้รู้สึกว่าทุกปัญหา มีทางออก
        </p>
        <p>
          เป็นการสร้างพื้นฐานการคิดและจิตใจให้เข้มแข็ง มีความพยายามมากขึ้น ให้น้อง ๆ
          พร้อมต่อยอดไปได้ในทุก ๆ เรื่อง ไม่ว่าการเข้าหาวิทยาลัย การทำงานในอนาคต
          หรือทำอะไรก็ตามในชีวิตของพวกเขา
        </p>
        <p className="italic font-semibold text-gray-700 dark:text-gray-200">
           เรียนสนุก เข้าใจง่าย ได้ประสบการณ์ เน้นการลงมือทำ ทดลอง และแก้ไขปัญหาด้วยตัวเอง 
        </p>
      </motion.div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.h3
          className="text-center text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          การเรียนรู้ของน้อง ๆ จะแบ่งเป็น 4 ส่วนหลัก
        </motion.h3>
        <div className="flex justify-center mb-10">
          <div className="w-16 h-1 rounded-full bg-blue-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((sec, index) => (
            <motion.div
              key={sec.title}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Top color accent */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: sec.color }}
              />
              <div className="p-5 flex flex-col gap-3">
                <h4
                  className="font-bold text-base"
                  style={{ color: sec.color }}
                >
                  {sec.title} :
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {sec.description}
                </p>
                {sec.items && (
                  <ul className="space-y-1 mt-1">
                    {sec.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-600 dark:text-gray-400 before:content-['·'] before:mr-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}