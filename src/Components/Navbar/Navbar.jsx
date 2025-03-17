import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
<div className="pt-6">
<Link to="/" className="text-xl font-extrabold text-white">
              CINEMEDIA
            </Link>
           <br/>
            <p className="text-sm font-extralight text-center text-white">AGENCY</p>
</div>
          </div>


          {/* Navigation links on the right (desktop) */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-white font-semibold hover:text-blue-500">
              HOME
            </Link>
            <Link to="services" className="text-white font-semibold hover:text-blue-500">
              SERVICES
            </Link>
            <Link to="about" className="text-white font-semibold hover:text-blue-500">
              CLIENTS
            </Link>
            <Link to="contact" className="text-white  font-semibold hover:text-blue-500">
              CONTACT US
            </Link>
            <Link to="ourwork" className="text-white font-semibold hover:text-blue-500">
              OUR WORK
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (hidden by default) */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block text-white hover:text-blue-500">
                Home
              </Link>
              <Link to="about" className="block text-white hover:text-blue-500">
                About
              </Link>
              <Link to="services" className="block text-white hover:text-blue-500">
                Services
              </Link>
              <Link to="contact" className="block text-white hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;