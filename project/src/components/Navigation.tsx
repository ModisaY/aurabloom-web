import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="src/img/logo.png" alt="AuraBloom Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AuraBloom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-button-pink">Home</Link>
            <Link to="/features" className="text-gray-600 hover:text-button-pink">Features</Link>
            <Link to="/about" className="text-gray-600 hover:text-button-pink">About</Link>
            <Link to="/faq" className="text-gray-600 hover:text-button-pink">FAQ</Link>
            <Link to="/contact" className="text-gray-600 hover:text-button-pink">Contact</Link>
            <button className="bg-button-pink text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
              Download Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-button-pink hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link 
                to="/" 
                className="block text-gray-600 hover:text-button-pink py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="block text-gray-600 hover:text-button-pink py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-600 hover:text-button-pink py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/faq" 
                className="block text-gray-600 hover:text-button-pink py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-600 hover:text-button-pink py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <button className="w-full bg-button-pink text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                  Download Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;