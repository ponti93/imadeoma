import React from 'react';
import { Smartphone, Calendar, Sparkles } from 'lucide-react';

const BookingProcess: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif text-gray-900 mb-6">Ready to Book?</h2>
        <p className="text-gray-500 mb-12 max-w-lg mx-auto">
          Secure your date today. A 50% non-refundable deposit is required to confirm all bookings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4">
                    <Smartphone size={28} />
                </div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">1. Chat with Us</h3>
                <p className="text-xs text-gray-500">Send a WhatsApp message with your date, time, and location.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4">
                    <Calendar size={28} />
                </div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">2. Confirm Details</h3>
                <p className="text-xs text-gray-500">We will confirm availability and send payment details.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4">
                    <Sparkles size={28} />
                </div>
                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">3. Get Glammed</h3>
                <p className="text-xs text-gray-500">Imade Oma arrives to make you look stunning.</p>
            </div>
        </div>

        <a href="https://wa.me/2340000000000" className="inline-flex items-center justify-center px-10 py-5 bg-green-500 text-white font-bold uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg shadow-green-200">
            <Smartphone className="mr-2" size={20} />
            Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default BookingProcess;