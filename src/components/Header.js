import React, { useState } from 'react';
import Contact from './Contact'; // Import the Contact component
import 'animate.css'; // Ensure Animate.css is imported
import { FaBars } from 'react-icons/fa'; // Importing a hamburger icon

const Header = () => {
  const [isContactVisible, setContactVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // State to manage mobile menu

  const handleOpenContact = () => {
    setContactVisible(true);
  };

  const handleCloseContact = () => {
    setContactVisible(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-5 shadow-lg sticky top-0 z-10">
      <nav className="flex items-center justify-between">
        <h1 className="text-white text-3xl font-bold animate__animated animate__bounce animate__delay-1s">
          Wave T3ch
        </h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-white">
            <FaBars size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-grow md:flex md:items-center md:justify-center space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} md:block`}>
          {['Home', 'About', 'Projects'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-white font-medium hover:text-yellow-300 transition duration-300"
            >
              {item}
            </a>
          ))}
          {/* Link to open the Contact modal */}
          <button
            onClick={handleOpenContact}
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            Contact
          </button>
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={handleOpenContact}
          className="hidden md:block bg-white text-blue-500 py-2 px-4 rounded-lg font-semibold transition duration-300 hover:bg-gray-200"
        >
          Get Started
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-purple-500 p-4 space-y-2">
          {['Home', 'About', 'Projects'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="block text-white font-medium hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {item}
            </a>
          ))}
          <button
            onClick={handleOpenContact}
            className="block text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            Contact
          </button>
        </div>
      )}

      {/* Contact Component Modal */}
      {isContactVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <Contact />
            <button
              onClick={handleCloseContact}
              className="mt-4 bg-gray-300 px-4 py-2 rounded transition duration-300 hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;