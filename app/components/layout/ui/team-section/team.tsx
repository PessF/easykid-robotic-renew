"use client";
import { TeamMemberCard } from "./teamcard";


// === Mentors Data (บน - 4 การ์ด) ===
const mentors = [
  {
    nickname: "KRU NOTE",
    fullName: "ขจรศักดิ์ จันทร์แจ่ม",
    image: "/pictures/team/teacher_note.jpg", 
    color: "text-[#1da1f2]", 
    qualifications: [
      "ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (วิศวกรรมอุตสาหการ) มหาวิทยาลัยธุรกิจบัณฑิตย์",
      "ปริญญาโท วิศวกรรมศาสตรมหาบัณฑิต (วิศวกรรมคอมพิวเตอร์และโทรคมนาคม) มหาวิทยาลัยธุรกิจบัณฑิตย์",
    ],
  },
  {
    nickname: "KRU APPLE",
    fullName: "รัณชญา ออมขัน",
    image: "/pictures/team/teacher_apple.jpg",
    color: "text-[#22c55e]", 
    qualifications: [
      "ปริญญาตรี ครุศาสตรบัณฑิต (คอมพิวเตอร์) มหาวิทยาลัยราชภัฏลำปาง",
    ],
  },
  {
    nickname: "KRU TOFFEE",
    fullName: "กิตติภพ ปินทิโย",
    image: "/pictures/team/teacher_toffee.jpg",
    color: "text-[#f97316]", 
    qualifications: [
      "ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (เทคโนโลยีสารสนเทศ) มหาวิทยาลัยนเรศวร",
      "ปริญญาโท ศึกษาศาสตรมหาบัณฑิต (หลักสูตรและการสอน) มหาวิทยาลัยราชภัฏลำปาง",
    ],
  },
  {
    nickname: "KRU NUT",
    fullName: "ศศิวิมล ใจศิลป์",
    image: "/pictures/team/teacher_nut.jpg",
    color: "text-[#f43f5e]", 
    qualifications: [
      "ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์) มหาวิทยาลัยเชียงใหม่",
      "ปริญญาโท วิทยาศาสตรมหาบัณฑิต (พัฒนาการมนุษย์) มหาวิทยาลัยมหิดล",
    ],
  },
];


const assistants = [
  {
    nickname: "P'UNUN",
    fullName: "กันต์ กาญจนพิพัฒนกุล",
    image: "/pictures/team/p_unun.jpg",
    color: "text-[#a855f7]", 
  },
  {
    nickname: "P'MORK",
    fullName: "ทัศวัฒน์ชัย ชอบปี",
    image: "/pictures/team/p_mork.jpg",
    color: "text-[#3b82f6]", 
  },
  {
    nickname: "P'LUKA",
    fullName: "Luka Chanakan Bond",
    image: "/pictures/team/p_luka.jpg",
    color: "text-[#14b8a6]",
  },
  {
    nickname: "P'JUNIOR",
    fullName: "ดนุพัฒน์ ปานประดิษฐ์",
    image: "/pictures/team/p_junior.jpg",
    color: "text-[#eab308]", 
  },
  {
    nickname: "P'TLE",
    fullName: "ชวัลวิทย์ จันทร์สว่าง",
    image: "/pictures/team/p_tle.jpg",
    color: "text-[#ef4444]", 
  },
  {
    nickname: "P'JOE",
    fullName: "ภัทรกร อินต๊ะแก้ว",
    image: "/pictures/team/p_joe.jpg",
    color: "text-[#db2777]", 
  },
];

export const OurTeam = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header Section === */}
        <div className="text-center mb-16 space-y-3">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-2 uppercase tracking-wide">
            Our <span className="text-blue-600">Expert Team</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ทีมครูผู้เชี่ยวชาญที่มีประสบการณ์และความมุ่งมั่น พร้อมดูแลและปลุกปั้นอัจฉริยะตัวน้อยของคุณในทุกก้าวของการเรียนรู้
          </p>
        </div>

        {/* === Part 1: Our Mentors (Top) === */}
        <div className="mb-20 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white uppercase tracking-wider">
              Our Mentors
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2"></div> {/* เส้นคั่นเล็กๆ */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, idx) => (
              <TeamMemberCard key={idx} member={{ ...mentor, size: "md" }} />
            ))}
          </div>
        </div>

        {/* === Part 2: Assistants (Bottom) === */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white uppercase tracking-wider">
              Assistants
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {assistants.map((assistant, idx) => (
              <TeamMemberCard key={idx} member={{ ...assistant, size: "sm" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};