import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {

const [isScroll,setIsScroll] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);


useEffect(() => {
  window.addEventListener("scroll", () => {
    if (scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  })
},[])

const closeMenu = () => {
  setIsMenuOpen(false); // Closes the mobile menu
};


  return (
    <>
      {/* Background Header Image */}
      <div className="position-fixed top-0 end-0 w-100 h-100" style={{ zIndex: -1 }}>
        <Image
          src={assets.header_bg_color}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          className="w-100 h-100"
        />
      </div>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top px-5 ${isScroll ? "bg-white bg-opacity-70 backdrop-blur-lg shadow-sm" : ""}`}>


      
        <div className="container-fluid d-flex align-items-center justify-content-between py-2">
          {/* Logo */}
          <a href="#top" className="navbar-brand">
            <Image
              src={assets.logo}
              alt="Logo"
              width={80}
              height={50}
              priority
            />
          </a>

          {/* Toggle Button for Mobile */}
          <button
  className="navbar-toggler border-0 bg-white p-2 rounded-circle d-lg-none"
  type="button"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <Image
    src={assets.menu_black}
    alt="Menu"
    width={20}
    height={20}
  />
</button>


          {/* Navigation Links */}
          <div
  className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? "show bg-white text-white rounded-4 px-4 py-3 mt-3" : ""}`}
  id="navbarNav"
>



        <ul className={`navbar-nav d-flex flex-column flex-lg-row justify-content-center gap-4 px-4 py-2 list-unstyled ${isScroll ? "" : "bg-white bg-opacity-50"}  rounded-pill mt-3 mt-lg-0`}>
        <li className="nav-item">
                <a
                  className="nav-link text-dark fw-medium text-decoration-none"
                  href="#top"
                  onClick={closeMenu} // Close the menu when clicked
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-medium text-decoration-none"
                  href="#about"
                  onClick={closeMenu} // Close the menu when clicked
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-medium text-decoration-none"
                  href="#services"
                  onClick={closeMenu} // Close the menu when clicked
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-medium text-decoration-none"
                  href="#projects"
                  onClick={closeMenu} // Close the menu when clicked
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-medium text-decoration-none"
                  href="#contact"
                  onClick={closeMenu} // Close the menu when clicked
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <button className="btn p-0">
              <Image
                src={assets.moon_icon}
                alt="Dark Mode"
                width={30}
                height={30}
              />
            </button>
            <a
              href="#contact"
              className="d-flex align-items-center gap-2 px-4 py-2 border border-secondary rounded-pill text-decoration-none text-black"
            >
              Contact
              <Image src={assets.arrow_icon} alt="Arrow Icon" width={20} height={20} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
