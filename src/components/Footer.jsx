import React from 'react';
import { Facebook, Instagram, Youtube, Twitter as X, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: 'https://instagram.com' },
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', url: 'https://facebook.com' },
    { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', url: 'https://youtube.com' },
    { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', url: 'https://twitter.com' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Nagpur, Maharashtra', href: 'https://maps.google.com' },
    { icon: Phone, text: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
    { icon: Mail, text: 'contact@vikasthakre.in', href: 'mailto:contact@vikasthakre.in' }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 relative">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-[#0640AD] to-blue-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand and About Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Vikas Thakre
              </h2>
              <div className="w-12 h-1 bg-[#0640AD] rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-700 font-medium">
              Serving Nagpur, Empowering People
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Committed to the development and welfare of Nagpur through transparent governance, 
              community engagement, and sustainable progress.
            </p>

            {/* Contact information */}
            <div className="space-y-4 mt-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#0640AD] transition-colors group"
                  target={item.icon === MapPin ? "_blank" : ""}
                  rel={item.icon === MapPin ? "noopener noreferrer" : ""}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <item.icon size={18} className="text-[#0640AD]" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
              Navigation
            </h3>
            <nav>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group text-gray-600 hover:text-[#0640AD] transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#0640AD] group-hover:w-3 transition-all"></span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
              Connect With Us
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Stay connected for latest updates and community initiatives
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-gray-600 p-3 rounded-full transition-all duration-300 hover:-translate-y-1 group"
                    aria-label={social.name}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 fill-current" 
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vikas Thakre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;