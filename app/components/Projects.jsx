import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <div className="container py-5" id="projects">
      <h5 className="text-center text-primary mb-2 fw-bold">
        My Portfolio
      </h5>
      <h2 className="text-center display-5 fw-semibold mb-4">
        My Latest Projects
      </h2>
      <p className="text-center mx-auto mb-5 w-75">
        Here are some of my recent projects that showcase my skills and creativity. <br />
        Click on the images to view the live demos.
      </p>

      <div className="row g-4">
        {workData && workData.length > 0 ? (
          workData.map(({ title, description, bgImage }, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="card shadow border-0 h-100 position-relative overflow-hidden text-white">
                
                {/* Background Image */}
                <div
                  className="card-img-top"
                  style={{
                    height: '250px',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>

                {/* Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 transition"></div>

                {/* Text Content */}
                <div className="card-body position-absolute bottom-0 start-0 p-3 z-3 border border bg-dark bg-opacity-75 rounded-2 pt-2 pb-2">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                 
                </div>
                <div className="position-absolute top-0 end-0 m-2 z-3 d-flex align-items-center justify-content-center pt-1 border border-2black w-9 rounded-circle bg-white shadow-[2px_2px_0px_rgba(0,0,0,0.25)] group-hover:bg-lime-300 transition">
                    <Image
                      src={assets.send_icon}
                      alt="Arrow"
                      width={24}
                      height={24}
                    />
                  </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No projects available at the moment.</p>
        )}
      </div>
      

      <div className="text-center mt-4">
        <a 
          href="#contact" 
          className="d-inline-flex align-items-center text-decoration-none text-primary border border-secondary rounded-pill py-2 px-4"
        >
          View All Projects
          <Image src={assets.right_arrow_bold} className="ms-2" alt="Right Arrow" width={16} height={16} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
