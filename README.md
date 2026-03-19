# EasyKids Robotics - เว็บไซต์โรงเรียนหุ่นยนต์

เว็บไซต์ของ EasyKids Robotics School - สถาบันการศึกษาด้านหุ่นยนต์และเทคโนโลยี เว็บไซต์แสดงข้อมูลเกี่ยวกับคอร์สเรียน ทีม ผลงานของนักเรียน และรางวัลที่ได้รับ

## 📋 สารบัญ

- [ภาพรวมของโปรเจค](#ภาพรวมของโปรเจค)
- [เทคโนโลยีที่ใช้](#เทคโนโลยีที่ใช้)
- [โครงสร้างไฟล์โปรเจค](#โครงสร้างไฟล์โปรเจค)
- [การติดตั้งและการเริ่มต้น](#การติดตั้งและการเริ่มต้น)
- [วิธีการพัฒนา](#วิธีการพัฒนา)
- [วิธีเพิ่มและแก้ไขเนื้อหา](#วิธีเพิ่มและแก้ไขเนื้อหา)
- [การ Deploy](#การ-deploy)

## 🎯 ภาพรวมของโปรเจค

เว็บไซต์นี้สร้างขึ้นด้วย **Next.js** เพื่อแสดงข้อมูลเกี่ยวกับโรงเรียนหุ่นยนต์ EasyKids มีหน้าและฟีเจอร์ดังนี้:

- **หน้าแรก (Home)**: แสดง Hero section, เกี่ยวกับเรา, คอร์สเรียน, ทีม, ติดต่อเรา
- **หน้าคอร์สเรียน (Courses)**: แสดงรายละเอียดคอร์สเรียนในแต่ละระดับ (Kids, Juniors, Seniors, Projects)
- **หน้าผลงานและรางวัล (Moments & Achievements)**: แสดงภาพและรายละเอียดการแข่งขัน เหตุการณ์ พอร์ตโฟลิโอของนักเรียน

## 🛠 เทคโนโลยีที่ใช้

| เทคโนโลยี | เวอร์ชัน | วัตถุประสงค์ |
|----------|---------|-----------|
| **Next.js** | 16.1.6 | React Framework สำหรับเว็บแอปพลิเคชัน |
| **React** | 19.2.3 | UI Library |
| **TypeScript** | 5 | Type-safe JavaScript |
| **Tailwind CSS** | 4 | Utility-first CSS Framework |
| **Framer Motion** | 12.34.5 | Animation library |
| **React Icons** | 5.6.0 | Icon library |
| **Lucide React** | 0.577.0 | Icon library |

## 📁 โครงสร้างไฟล์โปรเจค

```
app/
├── app/                          # Next.js App Directory (Source Code)
│   ├── page.tsx                  # หน้าแรก (Home page)
│   ├── layout.tsx                # Layout หลักของเว็บไซต์
│   ├── globals.css               # CSS global styles
│   ├── components/               # React Components
│   │   └── layout/               # Components ที่เกี่ยวกับ Layout
│   │       ├── navbar/           # Navigation Bar
│   │       │   ├── logo.tsx      # Logo Component
│   │       │   └── navbar.tsx    # Navbar Component
│   │       └── ui/               # UI Components
│   │           ├── hero.tsx      # Hero Section
│   │           ├── about.tsx     # About Us Section
│   │           ├── course.tsx    # Course Section
│   │           ├── contact.tsx   # Contact Section
│   │           ├── footer.tsx    # Footer
│   │           └── team-section/ # Team Section
│   │               ├── team.tsx  # Team Container
│   │               └── teamcard.tsx # Team Member Card
│   ├── course/                   # Route สำหรับหน้าคอร์สเรียน
│   └── moments-and-achievements/ # Route สำหรับหน้าผลงานและรางวัล
│       ├── page.tsx              # Moments & Achievements page
│       └── template.tsx          # Template สำหรับหน้า
│
├── src/                          # Source Code (Data & Utilities)
│   ├── scroll.ts                 # Scroll-related utilities
│   └── data/
│       └── reward.ts             # ข้อมูลรางวัลและผลงาน
│
├── public/                       # Static Assets
│   ├── pictures/
│   │   ├── course/               # ภาพสำหรับแต่ละคอร์ส
│   │   │   ├── kids-level/
│   │   │   ├── juniors-level/
│   │   │   ├── seniors-level/
│   │   │   └── project-level/
│   │   ├── moment-and-reward/    # ภาพการแข่งขัน เหตุการณ์ รางวัล
│   │   │   ├── competition/
│   │   │   ├── event/
│   │   │   ├── juniors/
│   │   │   ├── kids/
│   │   │   ├── projects/
│   │   │   ├── robot/
│   │   │   ├── seniors/
│   │   │   └── station/
│   │   ├── team/                 # ภาพสมาชิกทีม
│   │   └── sup/
│   └── videos/                   # ไฟล์วิดีโอ
│
├── package.json                  # Dependencies
├── next.config.ts                # Next.js Configuration
├── tsconfig.json                 # TypeScript Configuration
├── tailwind.config.js            # Tailwind CSS Configuration
├── postcss.config.mjs            # PostCSS Configuration
└── eslint.config.mjs             # ESLint Configuration
```

### 📝 ความหมายของไดเรกทอรี

- **app/**: ไดเรกทอรีหลักของ Next.js ที่บรรจุ pages, layouts, components
- **src/data/**: ไฟล์ข้อมูล (JSON, TypeScript objects) ที่ใช้ในการแสดงผลเนื้อหา
- **public/pictures/**: เก็บรูปภาพทั้งหมดของเว็บไซต์
- **public/videos/**: เก็บไฟล์วิดีโอ (ถ้ามี)

## 🚀 การติดตั้งและการเริ่มต้น

### ข้อกำหนดเบื้องต้น

- Node.js เวอร์ชัน 18 ขึ้นไป
- Bun runtime

### ขั้นตอนการติดตั้ง

1. **Clone Repository** (ถ้ายังไม่ได้)
   ```bash
   git clone <repository-url>
   cd app
   ```

2. **ติดตั้ง Dependencies**
   ```bash
   bun install
   ```

3. **เรียกใช้ Development Server**
   ```bash
   bun dev
   ```

4. **เข้าชมเว็บไซต์**
   - เปิด Browser และไปที่ [http://localhost:3000](http://localhost:3000)
   - หน้าจะอัพเดตอัตโนมัติเมื่อแก้ไขไฟล์

## 💻 วิธีการพัฒนา

### โครงสร้างการพัฒนา

1. **สร้าง Component ใหม่**
   ```tsx
   // app/components/ui/my-component.tsx
   export default function MyComponent() {
     return <div>My Component</div>;
   }
   ```

2. **เพิ่ม Styling ด้วย Tailwind CSS**
   ```tsx
   <div className="bg-blue-500 text-white p-4 rounded-lg">
     Styled with Tailwind
   </div>
   ```

3. **ใช้ Framer Motion สำหรับ Animation**
   ```tsx
   import { motion } from "framer-motion";
   
   <motion.div
     animate={{ opacity: 1 }}
     initial={{ opacity: 0 }}
     transition={{ duration: 0.5 }}
   >
     Animated Content
   </motion.div>
   ```

4. **ใช้ Icons จาก react-icons หรือ lucide-react**
   ```tsx
   import { FiMenu } from "react-icons/fi";
   import { Heart } from "lucide-react";
   ```

### Linting และ Type Checking

```bash
# รัน ESLint เพื่อตรวจสอบ Code Quality
bun run lint
```

### Build สำหรับ Production

```bash
bun run build
bun start
```

## 📝 วิธีเพิ่มและแก้ไขเนื้อหา

### 1. เพิ่มข้อมูลรางวัลใหม่

แก้ไขไฟล์ `src/data/reward.ts`:

```typescript
export const Reward_data = [
    {
      id: 1101,
      title: "ชื่อการแข่งขัน",
      thumbnail: "/pictures/moment-and-reward/competition/image.jpg",
      text: "คำอธิบายสั้น ๆ",
      images: ["/pictures/moment-and-reward/image1.jpg"],
      date: "2024",
      awardTitle: "รางวัลที่ได้รับ",
      winners: ["ชื่อทีม"],
    },
    // เพิ่มรายการใหม่...
];
```

### 2. เพิ่ม/แก้ไข Routes ใหม่

สร้างไฟล์ในไดเรกทอรี `app/` :

```bash
app/new-page/page.tsx          # URL จะเป็น /new-page
app/new-page/layout.tsx        # Layout สำหรับ page นั้น
```

### 3. เพิ่มภาพใหม่

1. วางภาพไว้ในโฟลเดอร์ที่เหมาะสมใน `public/pictures/`
2. อ้างอิงในไฟล์ component หรือ data:
   ```tsx
   <img src="/pictures/moment-and-reward/competition/my-image.jpg" alt="description" />
   ```

### 4. แก้ไข Navigation Menu

หาไฟล์ `app/components/layout/navbar/navbar.tsx` และเพิ่มลิงก์ใหม่:

```tsx
const menuItems = [
  { label: "Home", href: "/" },
  { label: "Course", href: "/course" },
  { label: "New Menu", href: "/new-page" },
  // เพิ่มเมนูใหม่...
];
```

## 🌐 การ Deploy

### Deploy บน Vercel (แนะนำ)

1. **Push code ไปยัง GitHub**
   ```bash
   git push origin main
   ```

2. **เชื่อมต่อกับ Vercel**
   - ไปที่ [vercel.com](https://vercel.com)
   - คลิก "New Project" และเลือก Repository
   - Vercel จะ Auto-detect Next.js และตั้งค่าอัตโนมัติ
   - กด "Deploy"

3. **ตัวเลือกอื่น ๆ**
   - เมื่อ Push ไปยัง main branch จะ Auto-deploy
   - สามารถ Preview Pull Requests

### Deploy บน Server อื่น ๆ

```bash
# Build production files
npm run build

# เริ่มต้น production server
npm start
```

## 📌 Notes สำหรับการพัฒนาต่อ

- **TypeScript**: โปรเจคใช้ TypeScript ดังนั้นควรเขียน type annotations
- **Tailwind Classes**: ใช้ Tailwind CSS สำหรับ styling ไม่ใช่ CSS files
- **Component Structure**: เก็บ components ในโฟลเดอร์ย่อยตามความหมาย
- **Data Management**: ข้อมูล static ควรอยู่ในโฟลเดอร์ `src/data/`
- **Asset Naming**: ตั้งชื่อ asset ให้ชัดเจนและใช้ lowercase

## 🤝 ติดต่อและความช่วยเหลือ

สำหรับคำถามหรือการแก้ไข bug โปรดติดต่อทีมพัฒนาหรือเปิด Issue ใน Repository

---

**ล่าสุดอัพเดท**: 2024
