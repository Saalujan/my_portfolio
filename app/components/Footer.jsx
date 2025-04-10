import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black border-t border-gray-300 pt-2">
      {/* Logo & Email */}
      <div className="text-center mb-2">
        <Image src={assets.logo} alt="Logo" width={80} height={50} priority className="mx-auto mb-2" />

        <div className="d-flex align-items-center justify-content-center gap-2">
          <Image src={assets.mail_icon} alt="Mail Icon" width={20} height={20} />
          <span className="fw-medium">saalu2023@gmail.com</span>
        </div>
      </div>
      <hr className="my-4" />

      {/* Description & Copyright */}
      <div className=" d-flex text-center  justify-content-between px-4">
       
        <p className="mb-2">© 2023 Saalu. All rights reserved.</p>

         {/* Social Links */}
         <div className=" text-center px-4 ">
  <ul className="d-flex align-items-center justify-content-center gap-4 list-unstyled pb-4">
    <li>
      <a
        target="_blank"
        href="https://github.com/Saalujan"
        className="text-decoration-none text-black hover:text-primary hover:underline hover:fw-semibold transition-all duration-300"
      >
        GitHub
      </a>
    </li>
    <li>
      <a
        target="_blank"
        href="https://www.linkedin.com"
        className="text-decoration-none text-black hover:text-primary hover:underline hover:fw-semibold transition-all duration-300"
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a
        target="_blank"
        href="https://www.instagram.com"
        className="text-decoration-none text-black hover:text-primary hover:underline hover:fw-semibold transition-all duration-300"
      >
        Instagram
      </a>
    </li>
    <li>
      <a
        target="_blank"
        href="https://www.facebook.com"
        className="text-decoration-none text-black hover:text-primary hover:underline hover:fw-semibold transition-all duration-300"
      >
        Facebook
      </a>
    </li>
  </ul>
</div>

      
      </div>

     
    </footer>
  );
};

export default Footer;
