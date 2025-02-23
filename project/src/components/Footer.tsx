
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 flex flex-col items-center text-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="src/img/logo.png" alt="AuraBloom Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AuraBloom
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Smart Period Pain Management at Your Fingertips
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Quick Links</h3>
            <ul className="space-y-2 text-center">
              <li><Link to="/" className="text-gray-600 hover:text-button-pink">Home</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-button-pink">Features</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-button-pink">About</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-button-pink">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Contact</h3>
            <ul className="space-y-2 text-center">
              <li className="text-gray-600">aurabloominfo@gmail.com</li>
              <li className="text-gray-600">(+94) 71 628 9419</li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61555182401876" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-button-pink"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/@aurabloom" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-[#FF0000]"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/aurabloom28/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-button-pink"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/aurabloom/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-button-pink"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} AuraBloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;