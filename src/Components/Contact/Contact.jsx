import React from 'react';
import { FaPhone, FaEnvelope, FaQuoteRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import backgroundImage from '../../assets/backgroundHero.jpg';
import contactImg from '../../assets/contactImg.jpg';

function Contact() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-16 p-8 sm:p-12">
     

          
        {/* Left Section (Image + Title) */}
        <div className="lg:w-1/2 w-full flex flex-col items-center ">
          {/* Title over Image */}
          <h2 className="text-4xl sm:text-5xl font-bold uppercase text-white">CineMedia</h2>
          <p className="text-lg font-medium text-gray-300 pb-4">AGENCY</p>

          {/* Contact Image */}
          <img 
            src={contactImg} 
            alt="Contact" 
            className="w-full max-w-sm sm:max-w-md border-2 lg:max-w-lg rounded-lg  shadow-lg"
          />
        </div>

        {/* Right Section (Text & Buttons) */}
        <div className=" lg:w-1/2 w-full text-white text-center pt-20 lg:text-left">
          <h3 className="text-yellow-300 text-2xl sm:text-5xl  font-bold">GET IN TOUCH!</h3>

          {/* Contact Info Buttons */}
          <div className="mt-6 space-y-4 flex flex-col items-center lg:items-start w-full">
            <button className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-lg flex items-center gap-3  transition duration-300">
              <FaPhone />
              01288966500
            </button>
            <button className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-lg flex items-center gap-3  transition duration-300">
              <FaEnvelope />
              info@cinemediagency.com
            </button>
            <button className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-lg flex items-center gap-3  transition duration-300">
              <FaQuoteRight />
              Get Quote
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 justify-start ps-28  ">
            <a href="#" className=" text-3xl text-blue-500 hover:text-yellow-300"><FaFacebook /></a>
            <a href="#" className="text-orange-600 text-3xl hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="text-blue-400 text-3xl hover:text-yellow-300"><FaLinkedin /></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
