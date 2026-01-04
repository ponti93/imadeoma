import React from 'react';
import { Check } from 'lucide-react';

const services = [
  { 
    title: "Traditional Bridal", 
    price: "From ₦250,000",
    desc: "Full glam for your traditional engagement. Includes Gele tying, skin prep, and touch-up kit.",
    features: ["Skin Prep & Prime", "Custom Foundation Match", "Gele Styling", "Touch-up Kit"]
  },
  { 
    title: "White Wedding", 
    price: "From ₦300,000",
    desc: "Timeless, tear-proof elegance for your big day. We ensure you look perfect in person and on camera.",
    features: ["HD Bridal Makeup", "Lashes Installation", "Chest/Shoulder Glow", "Second Look Option"]
  },
  { 
    title: "Guest / Party Glam", 
    price: "₦35,000",
    desc: "Perfect for Asoebi ladies, birthday shoots, or special dinner dates.",
    features: ["Soft or Full Glam", "Brow Sculpting", "Lip Combo", "Lashes Included"]
  },
  { 
    title: "Gele Styling Only", 
    price: "₦10,000",
    desc: "Professional Gele tying service. Avant-garde, Fan, or simple styles available.",
    features: ["Multiple Styles", "Firm Grip", "Neat Finish", "Group Discounts"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored beauty packages for the Nigerian woman. 
            <br/><span className="text-sm italic text-gray-500">*Home service and travel available upon request.*</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 border border-brand-100 hover:border-brand-300 hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="mb-4">
                 <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{service.title}</h3>
                 <p className="text-brand-600 font-bold text-lg">{service.price}</p>
              </div>
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-600 uppercase tracking-wide">
                        <Check size={14} className="text-brand-500 mr-2" /> {feature}
                    </li>
                ))}
              </ul>
              <a href="#booking" className="block w-full py-3 border border-brand-900 text-brand-900 text-center text-xs font-bold uppercase tracking-widest group-hover:bg-brand-900 group-hover:text-white transition-colors">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;