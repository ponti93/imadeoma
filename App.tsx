import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import Socials from './components/Socials';
import BookingProcess from './components/BookingProcess';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Socials />
        <BookingProcess />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;