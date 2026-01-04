import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  { 
    name: "Chioma Okoye", 
    text: "Imade is magical! My traditional wedding makeup was exactly what I wanted. It stayed perfect despite the Lagos heat!", 
    type: "Traditional Bride" 
  },
  { 
    name: "Adesua E.", 
    text: "I booked the home service for my birthday. She was punctual, professional, and gave me the cleanest beat ever.", 
    type: "Birthday Glam" 
  },
  { 
    name: "Fatima Bello", 
    text: "Professionalism at its peak. The products she uses are top notch. I felt so beautiful on my Nikah.", 
    type: "White Wedding" 
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Client Love</h2>
           <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {reviews.map((r, i) => (
               <div key={i} className="bg-brand-800 p-8 border border-brand-700 relative">
                   <Quote className="text-brand-500 mb-6 w-10 h-10 opacity-50" />
                   <p className="text-gray-200 text-lg italic mb-6 leading-relaxed font-light">"{r.text}"</p>
                   <div>
                       <p className="font-bold text-white uppercase tracking-wider text-sm">{r.name}</p>
                       <p className="text-brand-300 text-xs uppercase mt-1">{r.type}</p>
                   </div>
               </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;