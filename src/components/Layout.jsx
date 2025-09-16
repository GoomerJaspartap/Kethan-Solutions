import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Calculator } from 'lucide-react';
import { Button } from './ui/button';
import logoSrc from '../assets/logo.png';
import logoWhiteSrc from '../assets/Logo - White.png';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoSrc} alt="Kethan Solutions Logo" className="w-10 h-10 rounded-lg object-contain" />
              <div>
                <span className="text-xl font-bold gradient-text">Kethan Solutions</span>
                <p className="text-xs text-gray-600">Financial Services</p>
              </div>
            </Link>

            {/* Navigation & CTA Button */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-[#000035] ${
                      location.pathname === item.path
                        ? 'text-[#000035] border-b-2 border-[#000035]'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Button 
                asChild
                className="bg-[#000035] hover:bg-[#000035]/90 text-white hover-lift"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
            

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={logoWhiteSrc} alt="Kethan Solutions Logo" className="w-10 h-10 rounded-lg object-contain" />
                <div>
                  <span className="text-xl font-bold text-white">Kethan Solutions</span>
                  <p className="text-xs text-gray-400">Financial Services</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted financial partner in Bachupally, Hyderabad. We provide personalized loan solutions 
                and expert financial guidance to help you achieve your goals.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <span className="text-lg font-semibold text-white mb-4 block">Quick Links</span>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/#emi-calculator" 
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-1"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>EMI Calculator</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <span className="text-lg font-semibold text-white mb-4 block">Contact Info</span>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">Plot No 180p 181p KVR Valley Mallampet, Bachupally, Hyderabad, Telangana 500090</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">7989838546</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">rajubasva22@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <span className="text-lg font-semibold text-white mb-4 block">Follow Us</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kethan Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;