import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Gallery', href: '/gallery', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'Contact Us', href: '/contact', hasDropdown: false }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        {/* Use flex with justify-between and w-full for full width */}
        <div className="flex items-center h-24 w-full">
          {/* Logo aligned left */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <span className="text-2xl lg:text-3xl font-space font-bold text-white">Vikas Thakre</span>
          </div>

          {/* Desktop Navigation centered */}
          <nav className="hidden lg:flex lg:text-[1.1vw] items-center space-x-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link to={item.href}>
                  <button className="flex items-center space-x-1 text-white hover:text-blue-500 font-medium transition-colors duration-300 py-2">
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </Link>
              </div>
            ))}
          </nav>

          {/* Donate Button aligned right */}
          <div className="hidden lg:block ml-auto flex-shrink-0">
            <Link to="/volunteer">
              <button className="bg-[#0066FF] hover:bg-[#0640AD] text-white font-space px-8 py-3 rounded-full transition-all duration-300">
                Know More | Join the Movement 
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button aligned right */}
          <div className="flex flex-1 justify-end lg:hidden">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-md">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link key={index} to={item.href}>
                <span className="block text-white hover:text-[#0640AD] font-medium py-2 transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}
            <Link to="/volunteer">
              <button className="w-full bg-[#0640AD] hover:bg-[#0066FF] text-white font-semibold py-3 rounded-full transition-colors mt-4">
                Know More | Join the Movement 
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
