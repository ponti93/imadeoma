import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-50 pt-20 pb-10 border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand */}
            <div>
                <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-brand-900">
                  IMADE OMA<span className="text-brand-600">.</span>
                </a>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Enhancing the beauty of the African woman. Professional makeup artistry services for all occasions.
                </p>
                <div className="flex space-x-4 mt-6 text-brand-800">
                    <Instagram size={20} className="hover:text-brand-500 cursor-pointer"/>
                    <Mail size={20} className="hover:text-brand-500 cursor-pointer"/>
                </div>
            </div>

            {/* Links */}
            <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-brand-600">Home</a></li>
                    <li><a href="#services" className="hover:text-brand-600">Bridal Packages</a></li>
                    <li><a href="#portfolio" className="hover:text-brand-600">Gallery</a></li>
                    <li><a href="#booking" className="hover:text-brand-600">Book Now</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-6">Contact Us</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex items-start">
                        <MapPin size={18} className="text-brand-500 mr-3 mt-0.5" />
                        <span>Lekki Phase 1, Lagos, Nigeria<br/>(Available for travel)</span>
                    </li>
                    <li className="flex items-center">
                        <Phone size={18} className="text-brand-500 mr-3" />
                        <span>+234 800 123 4567</span>
                    </li>
                    <li className="flex items-center">
                        <Mail size={18} className="text-brand-500 mr-3" />
                        <span>hello@imadeoma.com</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-brand-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
                &copy; {new Date().getFullYear()} Imade Oma Artistry.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;