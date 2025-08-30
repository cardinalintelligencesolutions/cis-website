import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cis-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/CIS.svg" 
                alt="CIS Logo" 
                className="h-10 w-10 filter brightness-0 invert"
              />
              <span className="text-2xl font-bold">CIS</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cybersecurity & Information Systems - Your trusted partner in digital security and technology solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>Email: info@cis.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Security Blvd, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; 2024 CIS - Cybersecurity & Information Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;