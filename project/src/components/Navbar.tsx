
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
          <img src="/img/logo.png" alt="AuraBloom Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AuraBloom
            </span>
          </Link>
          
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;