"use client";

import {
  FaFacebook,
  FaLine,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* หัวข้อหลัก - อิงตามภาพ image_4ed98b.jpg */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-tight inline-block">
            CONTACT US
          </h2>
          <div className="w-40 h-1 bg-gray-200 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* ฝั่งซ้าย: ข้อมูลการติดต่อ (เน้นตัวหนังสือใหญ่ อ่านง่าย ตามภาพ image_4e5344.png) */}
          <div className="space-y-12">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Easykidsrobotics/"
              target="_blank"
              className="flex items-center gap-6 group"
            >
              <div className="text-[#1877F2] shrink-0">
                <FaFacebook size={48} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Facebook</h4>
                <p className="text-lg text-gray-500">
                  Easykidsrobotics
                </p>
              </div>
            </a>

            {/* LINE */}
            <a
              href="https://line.me/ti/p/@easykidsrobotics"
              target="_blank"
              className="flex items-center gap-6 group"
            >
              <div className="text-[#06C755] shrink-0">
                <FaLine size={48} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">LINE</h4>
                <p className="text-lg text-gray-500">@easykidsrobotics</p>
              </div>
            </a>

            {/* Call */}
            <div className="flex items-start gap-6">
              <div className="text-[#F1C40F] shrink-0 mt-1">
                <FaPhoneAlt size={40} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Call</h4>
                <p className="text-lg text-gray-600 font-medium">
                  คอร์สเรียน 099 110 0202
                </p>
                <p className="text-lg text-gray-600 font-medium">
                  สั่งซื้อสินค้า 093 219 9121
                </p>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:easykidsrobotics@gmail.com"
              className="flex items-center gap-6 group"
            >
              <div className="text-[#E67E22] shrink-0">
                <FaEnvelope size={44} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Email</h4>
                <p className="text-lg text-gray-500">
                  easykidsrobotics@gmail.com
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-6">
              <div className="text-[#E74C3C] shrink-0 mt-1">
                <FaMapMarkerAlt size={44} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Address</h4>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  K-Park Business Center <br />
                  111/9 Moo 2 T.Nonghoi A.Muang Chiang Mai 50000 THAILAND
                </p>
              </div>
            </div>
          </div>

          {/* ฝั่งขวา: แผนที่ Google Maps */}
          <div className="w-full">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-400 uppercase tracking-widest text-center">
                LOCATION
              </h2>
              <div className="w-20 h-1 bg-gray-200 mx-auto mt-2"></div>
            </div>

            <div className="h-125 w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.9350457352552!2d98.99752487580078!3d18.75643816192568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da31ec2c63a347%3A0xb0ad5bfff00c7c82!2zRWFzeUtpZHMgUm9ib3RpY3Mg4Lio4Li54LiZ4Lii4LmM4LiB4Liy4Lij4LmA4Lij4Li14Lii4LiZ4Lij4Li54LmJ4LiB4Liy4Lij4LmA4LiC4Li14Lii4LiZ4LmC4Lib4Lij4LmB4LiB4Lij4Lih4LmB4Lil4Liw4LiZ4Lin4Lix4LiV4LiB4Lij4Lij4Lih4Lir4Li44LmI4LiZ4Lii4LiZ4LiV4LmM!5e0!3m2!1sth!2sth!4v1772703065310!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
