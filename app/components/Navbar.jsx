import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Background Header Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-20 translate-y-[-50%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top px-5">
        <div className="container-fluid d-flex align-items-center justify-content-between py-2">
          {/* Logo */}
          <a href="#top" className="navbar-brand">
            <Image
              src={assets.logo}
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </a>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler border-0 bg-white p-2 rounded-circle d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex flex-column flex-lg-row justify-content-center gap-4 px-4 py-2 list-unstyled bg-white bg-opacity-50 rounded-pill mt-3 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium text-decoration-none" href="#top">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium text-decoration-none" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium text-decoration-none" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium text-decoration-none" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium text-decoration-none" href="#contact">
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
