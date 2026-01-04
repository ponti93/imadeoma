import React from 'react';
import { Instagram, Phone, Twitter } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image & Socials Side */}
          <div className="w-full md:w-1/2 flex flex-col">
             {/* Image Container */}
             <div className="relative group w-full mb-12">
                 <div className="relative z-10 p-2 bg-white shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1586233828056-5d4c18bcf9d0?q=80&w=387&auto=format&fit=crop" 
                      alt="Imade Oma Artistry Tools" 
                      className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
                 {/* Decorative Background Elements */}
                 <div className="absolute top-10 -left-10 w-full h-full border-2 border-brand-200 -z-10 -rotate-2 group-hover:rotate-6 transition-transform duration-700"></div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-100 rounded-full blur-3xl opacity-50"></div>
             </div>

             {/* Socials Section */}
             <div className="w-full">
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                    <div className="h-[1px] w-8 bg-brand-300"></div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Connect with Imade</span>
                </div>
                
                <div className="flex gap-5 justify-center md:justify-start">
                    {/* Instagram */}
                    <a href="https://instagram.com" className="group/icon flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover/icon:bg-brand-600 group-hover/icon:text-white group-hover/icon:border-brand-600 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                            <Instagram size={20} />
                        </div>
                    </a>

                    {/* TikTok */}
                    <a href="#" className="group/icon flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover/icon:bg-black group-hover/icon:text-white group-hover/icon:border-black transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0 7.7 7.7V8.55a8.6 8.6 0 0 0 4.19 1.48V6.7a4.67 4.67 0 0 1-2.66-1.55z"/>
                            </svg>
                        </div>
                    </a>

                    {/* Snapchat */}
                    <a href="#" className="group/icon flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover/icon:bg-[#FFFC00] group-hover/icon:text-black group-hover/icon:border-[#FFFC00] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 2.5c-4.5 0-7 2.5-7 5.5 0 1.5 1 2.5 1 3.5 0 1.5-2 1.5-2 3.5 0 1.5 1.5 2.5 3.5 2.5.5 0 1-.5 1-1 0-.5.5-1 1-1 .5 0 1.5.5 2.5.5s2-.5 2.5-.5c.5 0 1 .5 1 1 0 .5.5 1 1 1 .5 0 1.5-.5 3.5-2.5 2 0 3.5-1 3.5-2.5 0-2-2-2-2-3.5 0-1 1-2 1-3.5 0-3-2.5-5.5-7-5.5z"/>
                            </svg>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/2340000000000" className="group/icon flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover/icon:bg-[#25D366] group-hover/icon:text-white group-hover/icon:border-[#25D366] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                            <Phone size={20} />
                        </div>
                    </a>
                </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
             <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-600"></div>
                <h2 className="text-brand-600 text-sm font-bold tracking-[0.3em] uppercase">Meet the Artist</h2>
             </div>
             
             <h3 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight">
                Hello, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Imade Oma</span>.
             </h3>
             
             <p className="text-gray-600 leading-loose mb-6 font-light text-lg">
               Based in Lagos, Nigeria, I specialize in creating timeless looks for the modern African woman. 
               Whether it's the rich cultural heritage displayed in a traditional engagement or the 
               pristine elegance of a white wedding, my goal is to make you feel confident and radiant.
             </p>
             <p className="text-gray-600 leading-loose mb-10 font-light text-lg">
               With over 5 years in the beauty industry, I understand that makeup is not just about 
               products—it's about enhancing your unique features, skin tone, and inner confidence.
             </p>
             
             <div className="grid grid-cols-2 gap-8 mb-10 border-t border-brand-100 pt-8">
                <div>
                    <span className="block text-4xl font-serif text-brand-600 mb-1">500+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Brides Glammed</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-brand-600 mb-1">100%</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Satisfaction</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;