"use client";

import Image from "next/image";
import { smoothScrollTo } from "@/src/scroll";

export const LogoEs = () => {
  return (
    <button
      onClick={() => smoothScrollTo("#home")}
      className="flex items-center justify-center md:justify-start"
    >
      <Image
        src="/pictures/logo_EasyKids_re3.png"
        alt="Logo"
        width={140}
        height={70}
        className="object-contain"
        style={{
          width: "auto",
          height: "clamp(30px, 7vw, 52px)",
        }}
      />
    </button>
  );
};
