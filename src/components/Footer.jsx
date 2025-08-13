import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:bg-pink-50 hover:border-pink-400 hover:text-pink-600' },
    { name: 'X', icon: Twitter, href: '#', color: 'hover:bg-gray-900 hover:border-gray-900 hover:text-white' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:bg-red-50 hover:border-red-400 hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                  Vikas Thakre
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-md">
                Serving Nagpur, Empowering People
              </p>
              
              <p className="text-gray-500 text-base leading-relaxed max-w-lg">
                Committed to the development and welfare of Nagpur through transparent governance, 
                community engagement, and sustainable progress.
              </p>

              {/* Contact info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm">Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 relative">
                Navigation
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-400 rounded-full"></div>
              </h3>
              <nav>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group text-gray-600 hover:text-orange-500 transition-all duration-200 text-base font-normal flex items-center gap-2"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 relative">
                Follow Us
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-400 rounded-full"></div>
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-500 text-sm mb-4">
                  Stay connected for latest updates
                </p>
                
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`group w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-gray-500 group-hover:scale-110 transition-all duration-200" />
                    </a>
                  ))}
                </div>
                
                {/* Social stats */}
                <div className="pt-4 space-y-2">
                  <div className="text-xs text-gray-400">
                    <span className="font-semibold text-gray-600">500+</span> followers across platforms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
              <p className="font-normal">
                © 2025 Vikas Thakre. All rights reserved.
              </p>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-400">
                Designed & Maintained by
              </p>
              <span className="text-sm font-semibold text-gray-700 px-2 py-1 bg-gray-100 rounded-md">
                FrameX
              </span>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="h-1 bg-gradient-to-r from-orange-400 via-red-400 to-orange-500"></div>
      </div>
    </footer>
  );
};

export default Footer;