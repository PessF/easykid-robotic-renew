"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  nickname: string;
  fullName: string;
  qualifications?: string[];
  image: string;
  color?: string;
  size?: "md" | "sm";
}

export const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const nicknameColor = member.color || "text-blue-500";
  const isSmall = member.size === "sm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`
        bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
        rounded-2xl overflow-hidden shadow-xl 
        border border-gray-200/50 dark:border-gray-700/50 
        transition-all duration-500 hover:shadow-2xl text-center
        flex flex-col relative group
        backdrop-blur-sm
        ${isSmall ? "p-6 gap-4" : "p-8 gap-6"}
      `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent to-blue-50/30 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* 2. รูปภาพครู */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className={`
          relative mx-auto rounded-full overflow-hidden 
          border-4 border-white dark:border-gray-800 
          shadow-2xl ring-2 ring-blue-100 dark:ring-blue-900/30
          z-10
          ${isSmall ? "w-28 h-28 mb-3" : "w-44 h-44"}
        `}
      >
        <Image
          src={member.image}
          alt={`${member.nickname} - ${member.fullName}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </motion.div>

      {/* 3. ข้อมูลครู */}
      <div className="flex flex-col gap-2 grow relative z-10">
        <h3
          className={`font-bold ${nicknameColor} uppercase tracking-wider ${isSmall ? "text-xl" : "text-2xl"} drop-shadow-sm`}
        >
          {member.nickname}
        </h3>
        <p
          className={`font-light text-gray-700 dark:text-gray-200 mb-3 ${isSmall ? "text-sm" : "text-lg"} tracking-wide`}
        >
          {member.fullName}
        </p>

        {/* 4. ประวัติการศึกษา */}
        {!isSmall && member.qualifications && (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-600 dark:text-gray-300 space-y-2 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
          >
            {member.qualifications.map((qual, idx) => (
              <p key={idx} className="leading-relaxed">
                {qual}
              </p>
            ))}
          </motion.div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
