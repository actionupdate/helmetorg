import React from 'react';
import { HardHat, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">HelmetHaven</span>
            </div>
            <p className="text-gray-500 mb-6">
              Professional helmet cleaning and sanitization services for riders who care about hygiene and safety.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Deep Interior Clean</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Ozone Sanitization</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Visor Restoration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Ceramic Coating</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>123 Rider's Lane, Moto City, MC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>hello@helmethaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 HelmetHaven. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;