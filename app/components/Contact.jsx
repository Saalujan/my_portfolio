import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ffff032b-0215-4fa6-ac12-08d0c2f888e2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (

    <div
      className="w-50 py-5 text-black text-center justify-content-center mx-auto flex flex-col items-center gap-4 p-4"
      id="contact"
    >
      <div className="container">
        <h5 className="text-primary mb-2 fw-bold">
          Connect with Me
        </h5>
        <h2 className="display-5 fw-semibold mb-4">
          Get in Touch
        </h2>
        <p className="mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below to reach out. <br />
          You can also connect with me on social media platforms.
        </p>
        <form  onSubmit={onSubmit} className='max-w-2xl mx-auto'>
  <div className="mb-3 d-flex grid grid -cols-auto gap-4">
    <input
      type="text"
      className="form-control"
      placeholder="Enter your name"
      required name='name'
    />
  

  
    <input
      type="email"
      className="form-control"
      placeholder="Enter your email"
      required name='email'
    />
  </div>

  <div className="mb-3">
    <textarea
      rows="6"
      className="form-control"
      placeholder="Enter your message"
      required name='message'
    ></textarea>
  </div>

  <button
  type="submit"
  className="btn w-30 bg-black text-white border border-black hover:bg-white hover:text-black transition duration-300"
>
  

 

    Submit Now<Image src={assets.right_arrow} alt="Right Arrow" className="ms-2" width={16} height={16} />
  </button>

  <p className="mt-3 text-success">{result}</p>
</form>

        

        {/* You can add a form or social icons here */}
      </div>
    </div>
  );
};

export default Contact;
