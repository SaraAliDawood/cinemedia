import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase"; // Import Firebase auth
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Track user authentication state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Set the user state
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user state
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              CINEMEDIA
            </Link>
          </div>

          {/* Navigation links on the right (desktop) */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-500">
              Services
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="text-gray-800 hover:text-blue-500"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="text-gray-800 hover:text-blue-500"
              >
                Login with Google
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
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
              <Link
                to="/"
                className="block text-gray-800 hover:text-blue-500"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-800 hover:text-blue-500"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-gray-800 hover:text-blue-500"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-gray-800 hover:text-blue-500"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="block text-gray-800 hover:text-blue-500"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleGoogleSignIn}
                  className="block text-gray-800 hover:text-blue-500"
                >
                  Login with Google
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;