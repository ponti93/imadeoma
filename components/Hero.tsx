import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-50">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595868321403-bac51fbdeb97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFmcmljYW4lMjBicmlkZSUyMG9uJTIwd2hpdGUlMjB3ZWRkaW5nJTIwZ293biUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Nigerian Bridal Makeup Glam" 
          className="w-full h-full object-cover object-top animate-pulse-slow"
        />
        {/* Gradient Overlay for text readability - Darker at bottom/left for text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/50 to-transparent mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pt-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 border border-white/30 text-white text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-md bg-white/10 rounded-full">
            Lagos • Abuja • Worldwide
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white font-medium leading-[0.9] mb-6 drop-shadow-lg">
            The Art of <br/>
            <span className="text-brand-200 font-cursive italic pr-4 opacity-90">African</span>
            Glamour
          </h1>
          
          <p className="text-gray-100 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed drop-shadow-md">
            Enhancing your natural beauty for Weddings, Owambes, and Special Events. 
            Experience the luxury touch of Imade Oma.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#services"
              className="px-10 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-700 transition-all shadow-xl shadow-brand-900/40 border border-transparent hover:border-white/20"
            >
              View Services
            </a>
            <a 
              href="https://wa.me/2340000000000" // Example WhatsApp link
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-900 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;