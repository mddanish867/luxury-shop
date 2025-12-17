import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "THE MONOCHROME COLLECTION", sub: "SS/2025", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" },
    { title: "VOID ESSENTIALS", sub: "ARCHIVE 01", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000" }
  ];

  return (
    <section className="relative h-[90vh] w-full pt-20 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img src={slides[current].img} className="w-full h-full object-cover opacity-60" alt="hero" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <span className="text-xs tracking-[0.5em] mb-4 uppercase">{slides[current].sub}</span>
        <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none max-w-4xl">{slides[current].title}</h2>
        <button className="px-10 py-4 bg-white text-black font-bold hover:bg-black hover:text-white border border-white transition-all duration-300">
          SHOP COLLECTION
        </button>
      </div>
      <div className="absolute bottom-10 right-10 flex gap-4">
        <button onClick={() => setCurrent(prev => (prev === 0 ? 1 : 0))} className="p-3 border border-white/20 hover:bg-white hover:text-black transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setCurrent(prev => (prev === 0 ? 1 : 0))} className="p-3 border border-white/20 hover:bg-white hover:text-black transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;