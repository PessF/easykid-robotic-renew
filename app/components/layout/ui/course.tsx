"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, CheckCircle2 } from "lucide-react";

const courses = [
  {
    title: "KIDS",
    age: "Ages 5-7",
    desc: "ไม่จำเป็นต้องมีพื้นฐาน",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    image: "/pictures/course/kids-level/cover.jpg",
    features: [
      { label: "Computer Skills", items: [] },
      { label: "Unplugged Coding", items: [] },
      {
        label: "Basic Block-Based Coding",
        items: ["MakeCode", "mBlock5", "ScratchJR", "PictoBlox (AI)"],
      },
      { label: "Basic Robotics", items: [] },
    ],
  },
  {
    title: "JUNIORS",
    age: "Ages 8-12",
    desc: "ไม่จำเป็นต้องมีพื้นฐาน",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    image: "/pictures/course/juniors-level/cover.jpg",
    features: [
      {
        label: "Programming Language",
        items: ["Block-Based", "Python", "C/C++"],
      },
      {
        label: "Robotics",
        items: ["BBC micro:bit", "micro:bit Robot", "mBot", "Arduino Robot"],
      },
    ],
  },
  {
    title: "SENIORS",
    age: "Ages 12+",
    desc: "ไม่จำเป็นต้องมีพื้นฐาน",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
    image: "/pictures/course/seniors-level/cover.jpg",
    features: [
      {
        label: "Advanced Languages",
        items: ["Python", "C/C++", "Linux", "HTML", "Swift"],
      },
      {
        label: "Engineering Design",
        items: ["Fusion 360", "Arduino IDE", "ROS", "Engineering Design"],
      },
      {
        label: "Advanced Robotics",
        items: ["K210 AI", "ESP32", "Raspberry Pi", "Robot Arm", "และอื่น ๆ อีกมากมาย"],
      },
    ],
  },
  {
    title: "PROJECT",
    age: "Ages 12+",
    desc: "Let's make your own project !!",
    color: "bg-rose-500",
    lightColor: "bg-rose-50",
    textColor: "text-rose-600",
    image: "/pictures/course/project-level/cover.jpg",
    features: [
      {
        label: "Full Integration",
        items: [
          "Coding & Robotics",
          "Circuits & Electronics",
          "3D Printing & Laser Cutting",
          "Maker Space Lab",
          "STEAM Education",
        ],
      },
    ],
  },
];

export const Courses = () => {
  return (
    <section className="py-20 bg-slate-50" id="courses">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-800"
            viewport={{ once: true }}
          >
            CODING & <span className="text-orange-500">ROBOTICS</span> COURSES
          </motion.h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                y: -12,
              }}
              viewport={{ once: true }}
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 py-3 text-center text-white font-bold tracking-widest ${course.color}`}
                >
                  {course.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 grow space-y-4">
                <div className="text-center">
                  <h3 className={`text-xl font-bold ${course.textColor}`}>
                    {course.age}
                  </h3>
                  <p className="text-sm text-slate-400 italic">{course.desc}</p>
                </div>

                <div className="space-y-4 pt-4">
                  {course.features.map((f, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 ${course.textColor}`}
                        />
                        {f.label}
                      </div>
                      {f.items.length > 0 && (
                        <ul className="pl-6 space-y-0.5">
                          {f.items.map((item, j) => (
                            <li
                              key={j}
                              className="text-xs text-slate-500 flex items-center gap-1"
                            >
                              <span className="w-1 h-1 bg-slate-300 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Button */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-white font-bold transition-opacity hover:opacity-90 ${course.color}`}
              >
                รายละเอียดเพิ่มเติม
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
