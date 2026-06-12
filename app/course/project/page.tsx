"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCoursePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link href="/#courses">
          <motion.span
            className="inline-flex items-center gap-1 text-rose-500 font-semibold text-sm cursor-pointer hover:underline"
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
          <span className="text-rose-500">PROJECT</span> : Ages 12+
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-rose-500" />
      </motion.div>

      {/* Description */}
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center space-y-3 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          EasyKids Coding & Robotics for PROJECT เหมาะสำหรับน้อง ๆ อายุ 12 ปีขึ้นไป
          ที่มีพื้นฐานการเขียน Code
        </p>
        <p className="italic font-semibold text-gray-700 dark:text-gray-200">
           เรียนสนุก เข้าใจง่าย ได้ประสบการณ์ เน้นการลงมือทำ ทดลอง และแก้ไขปัญหาด้วยตัวเอง 
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Section 1 - Let's Build */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full min-h-64 rounded-2xl overflow-hidden">
            <Image
              src="/pictures/course/project-course/course_project_1-1536x1145.jpg"
              alt="Project Course"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            <p className="font-bold text-gray-800 dark:text-white text-base">
               Build, Code and Control your own robot!!
            </p>
            <p>
              ออกแบบและประดิษฐ์หุ่นยนต์... เขียนโปรแกรม... และสนุกกับภารกิจต่าง ๆ ครบทุกประสบการณ์
            </p>
            <p>
              จุดประสงค์เพื่อนำการสนับสนุนให้กระตุ้นให้เกิดการเรียนรู้แบบไร้ขีดจำกัด
              มีความกล้าคิด กล้าทำ และกล้าแสดงออก ในการสร้างสรรค์ผลงานและสังประดิษฐ์
              น้อง ๆ จะได้พัฒนาทักษะการคิด การสังเกต ตั้งคำถาม แก้ปัญหา
              การหาข้อมูลใหม่ ๆ พร้อมทั้งสามารถนำข้อมูลค้นพบนั้นไปใช้หรือบูรณาการกับชีวิตประจำวันได้
            </p>
            <p>
              สำหรับน้อง ๆ ที่สนใจการสร้างสรรค์นวัตกรรมต่าง ๆ EasyKids Robotics
              ได้จัดเตรียมสถานที่ที่ครบครันด้วยวัสดุ อุปกรณ์เครื่องมือต่าง ๆ
              รวมถึงผู้เชี่ยวชาญที่พร้อมให้คำแนะนำและชี้แนวทางการคิดค้น
              การออกแบบ การประดิษฐ์ การคิดวิเคราะห์ และการแก้ไขปัญหา
              พร้อมทั้งการบรมการใช้เครื่องมือก่อนเข้าใช้สถานที่และอุปกรณ์
              น้อง ๆ สามารถหาความรู้ได้จากการใช้เทคโนโลยีต่าง ๆ
              เพื่อเพิ่มประสบการณ์ให้กับตนเองและก้าวขึ้นมาเป็น Maker ได้อย่างเต็มตัว
            </p>
          </div>
        </motion.div>

        {/* Section 2 - EasyKids Robotics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text */}
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center md:text-left">
            <p>
              EasyKids Robotics จะสอนให้น้อง ๆ ลงมือทำ ทดลอง และแก้ไขปัญหาด้วยตัวเอง
            </p>
            <p>
              การเขียน Code อาจจะไม่สำเร็จในครั้งแรกที่เริ่มเขียน
              ในแต่ละภารกิจน้อง ๆ ได้รับโจทย์ น้อง ๆ จะต้อง...
            </p>
            <p>
              วิเคราะห์โจทย์ &gt;&gt; ลงมือเขียน Code &gt;&gt; ทดลอง &gt;&gt;
              หาข้อผิดพลาด &gt;&gt; แก้ไขปัญหา &gt;&gt; ทดลองซ้ำ &gt;&gt;
              ปรับแก้ไปเรื่อย ๆ จนภารกิจสำเร็จ
              ซึ่งกิจกรรมต่าง ๆ ของเราจะช่วยฝึกฝนน้อง ๆ ในเรื่องของ{" "}
              <strong className="text-gray-800 dark:text-white">ความพยายามและความอดทน</strong>
            </p>
            <p>
              การให้น้อง ๆ ได้เจอโจทย์และแก้ปัญหาบ่อย ๆ จะช่วยให้พวกเขาพัฒนาตัวเอง
              เกิดความมั่นใจ ไม่กลัว และไม่หนีปัญหา น้อง ๆ จะสามารถแก้ปัญหาได้
              รู้ที่มาที่ไป สาเหตุของปัญหา และค่อย ๆ หาวิธีแก้
              หากวิธีนี้ไม่สำเร็จก็เปลี่ยนวิธีใหม่ ทักษะนี้สามารถประยุกต์ใช้กับชีวิตจริงของพวกเขาได้
              ทำให้รู้สึกว่าทุกปัญหามีทางออก เป็นการสร้างพื้นฐานการคิดและจิตใจให้เข้มแข็ง
              มีความพยายามมากขึ้น ให้น้อง ๆ พร้อมต่อยอดไปได้ในทุก ๆ เรื่อง
              ไม่ว่าการเข้าหาวิทยาลัย การทำงานในอนาคต
              หรือทำอะไรก็ตามในชีวิตของพวกเขา
            </p>
          </div>

          <div className="relative w-full min-h-64 rounded-2xl overflow-hidden">
            <Image
              src="/pictures/course/project-course/course_project_2-600x802.jpg"
              alt="Project Course 2"
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}