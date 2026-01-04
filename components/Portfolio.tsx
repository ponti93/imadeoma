import React from 'react';
import { Instagram } from 'lucide-react';

const Portfolio: React.FC = () => {
  const images = [
    // 1. Bold artistic eye look
    "https://images.unsplash.com/photo-1553095832-10e4a1382a11?w=600&auto=format&fit=crop&q=60", 
    // 2. Traditional Bride (African Bride)
    "https://plus.unsplash.com/premium_photo-1732464750451-d03355a57703?w=600&auto=format&fit=crop&q=60", 
    // 3. Soft Glam (Clean girl aesthetic)
    "https://plus.unsplash.com/premium_photo-1747325804939-75de6d817af6?w=600&auto=format&fit=crop&q=60", 
    // 4. Melanin Skin (Dark-skinned model)
    "https://images.unsplash.com/photo-1740389702904-c377cb8d372d?w=600&auto=format&fit=crop&q=60", 
    // 5. White Wedding (African bride in white)
    "https://images.unsplash.com/photo-1645827042168-4fb0cdd0bf7e?w=600&auto=format&fit=crop&q=60", 
    // 6. Editorial (Bold red lip)
    "https://images.unsplash.com/photo-1615532803206-0b7301e474f5?w=600&auto=format&fit=crop&q=60", 
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      {/* Decorative background blotch */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/50 -z-0 skew-x-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-brand-600 text-sm font-bold tracking-[0.3em] uppercase mb-3">The Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900">
                Real Clients, Real <span className="text-brand-500 font-cursive italic">Glow</span>
            </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden aspect-[4/5] bg-brand-100 shadow-md">
              <img 
                src={src} 
                alt={`Portfolio Look ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white">
                 <Instagram className="mb-2" size={32} />
                 <span className="text-xs tracking-widest uppercase font-bold">View on Instagram</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="https://instagram.com" className="inline-block px-12 py-4 border border-brand-200 text-brand-900 font-bold uppercase tracking-widest text-xs hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300">
                Load More
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;