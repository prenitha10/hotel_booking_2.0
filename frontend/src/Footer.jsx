import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg-cover bg-center h-auto bg-footer p-8 font-lex text-white">
      <p className="text-[40px] text-center mb-2">Contact Us</p>
      <p className="text-[25px] text-center mb-6">We are here to assist you!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-full">
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.834634167749!2d77.6072422!3d11.2735635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d780fa16dcf%3A0xae5bfd6265561d43!2sKonguTBI%20(TBI%40KEC)!5e0!3m2!1sen!2sin!4v1724773756857!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-[20px]">
            <p>
              <b>Address:</b> 123 Marina Beach Road, Chennai, Tamil Nadu, 600001, India
            </p>
          </div>

          <div className="text-[20px]">
            <p ><b>Phone:</b> +91 44 1234 5678 <br></br><b>Email:</b> info@hotelchennai.com </p>
          </div>

          <div className="text-[20px]"><p>
              <b>Office Hours:</b> <br />
              Monday - Friday: 8 AM - 8 PM <br />
              Saturday - Sunday: 9 AM - 6 PM
            </p>
          </div>
          <div className="text-[20px]">
            <p>
              <b>Follow Us:</b>
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-3xl hover:text-blue-800" />
              </a>

              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl hover:text-blue-600" />
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-3xl hover:text-pink-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;