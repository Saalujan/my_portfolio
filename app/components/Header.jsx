import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 p-4">
      {/* Profile Image with 2cm space */}
      <div className="mt-[2cm]">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="rounded-full"
          width={200}
          height={200}
        />
      </div>

      {/* Greeting */}
      <h2 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-2">
        Hi! I'm Saalu
        <Image src={assets.hand_icon} alt="Waving hand" className="w-6 h-6" />
      </h2>

      {/* Role Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
        <span className="text-primary">Frontend</span> Developer
      </h1>

      {/* Intro Text */}
      <p className="max-w-2xl mx-auto font-Ovo text-base md:text-lg leading-relaxed">
        I am a passionate frontend developer with a knack for creating
        interactive and user-friendly web applications.
        <br />
        I love turning ideas into reality through code and design.
      </p>

      {/* Buttons */}
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-4">
        <a
          href="#contact"
          className="d-flex align-items-center gap-2 px-4 py-2 border border-secondary rounded-pill text-decoration-none text-white bg-black"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow"
            width={16}
            height={16}
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="d-flex align-items-center gap-2 px-4 py-2 border border-secondary rounded-pill text-decoration-none text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download icon"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
