import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-button-pink stroke-[2.5]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AuraBloom
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-text-dark hover:text-button-pink transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-text-dark hover:text-button-pink transition-colors">
              Features
            </Link>
            <Link to="/about" className="text-text-dark hover:text-button-pink transition-colors">
              About
            </Link>
            <Link to="/faq" className="text-text-dark hover:text-button-pink transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-text-dark hover:text-button-pink transition-colors">
              Contact
            </Link>
            <a
              href="#download"
              className="bg-button-pink text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Download Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-dark hover:text-button-pink"
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
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block py-2 px-3 text-text-dark hover:text-button-pink rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="block py-2 px-3 text-text-dark hover:text-button-pink rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/about"
                className="block py-2 px-3 text-text-dark hover:text-button-pink rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/faq"
                className="block py-2 px-3 text-text-dark hover:text-button-pink rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-3 text-text-dark hover:text-button-pink rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 pb-1">
                <a
                  href="#download"
                  className="block text-center bg-button-pink text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Download Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;