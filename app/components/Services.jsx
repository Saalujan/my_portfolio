import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className="w-full pt-4 py-16 scroll-mt-20" id="services">
     
        <h5 className="text-center text-primary text-lg font-Ovo mb-2 tracking-wide">
          What I Offer
        </h5>
        <h2 className="text-center text-4xl md:text-5xl font-Ovo font-semibold mb-6">
          My Services
        </h2>
        <p className='mb-10 max-w-2xl font-Ovo justify-content-center text-center'>
          I specialize in creating stunning and user-friendly web applications that not only look great <br/>but also perform exceptionally well. My services include
      </p>
      <div className='container'>
      <div className="row g-3 px-1">
  {serviceData.map(({ icon, title, description, link }, index) => (
    <div key={index} className="col-6 col-md-4">
      <div className="d-flex flex-column align-items-center p-4 border  rounded-4 shadow text-center bg-white custom-hover-effect-service h-100">
        <Image
          src={icon}
          alt={title}
          className="mb-3"
          width={64}
          height={64}
        />
        <h3 className="fs-5 fw-semibold text-dark mb-2">{title}</h3>
        <p className="text-muted mb-2">{description}</p>
        <a
          href={link}
          className="text-primary text-decoration-none d-flex align-items-center justify-content-center mt-2"
        >
          Learn More
          <Image src={assets.right_arrow} className="ms-2" alt="Right Arrow" width={16} height={16} />
        </a>
      </div>
    </div>
  ))}
</div>

</div>

      
    
    </div>
  )
}

export default Services
