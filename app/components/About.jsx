import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full pt-4 py-16 scroll-mt-20" id="about">
      <div className="container">
        <h5 className="text-center text-primary text-lg font-Ovo mb-2 tracking-wide">
          Introduction
        </h5>
        <h2 className="text-center text-4xl md:text-5xl font-Ovo font-semibold mb-6">
          About Me
        </h2>

        <div className="row align-items-center justify-content-center g-5 px-3">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="p-3 rounded-3">
              <Image
                src={assets.user_image}
                alt="user"
                className="w-100 rounded-2xl h-auto object-cover border rounded-4 shadow-lg"
                style={{ maxWidth: "30rem" }}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <p className="mb-4 font-Ovo text-center text-md-start">
              I'm a passionate frontend developer with a strong eye for design
              and detail. I enjoy building responsive, accessible, and
              aesthetically pleasing web applications. Every line of code I
              write is aimed at creating meaningful digital experiences.
            </p>
            <div className="row row-cols-2 row-cols-sm-4 g-3 justify-content-center gap-3">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <div
                  key={index}
                  className="col d-flex flex-column align-items-center p-3 border border-secondary rounded-4 shadow-sm bg-white custom-hover-effect"
                >
                  <Image
                    src={icon}
                    alt={title}
                    className="mb-2"
                    width={40}
                    height={40}
                  />
                  <h3 className="fs-6 fw-semibold text-dark text-center">
                    {title}
                  </h3>
                  <p className="text-muted text-center small">{description}</p>
                </div>
              ))}
            </div>

            <h4 className="my-4 text-gray-600 pt-3 text-center text-md-start">
              Tools I use
            </h4>
            <ul className="d-flex flex-wrap gap-3 list-unstyled justify-content-center justify-content-md-start">
              {toolsData.map((tool, index) => (
                <li
                  className="d-flex align-items-center justify-content-center border border-gray-400 rounded-2 p-2"
                  key={index}
                >
                  <Image src={tool} alt={tool} width={45} height={45} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
