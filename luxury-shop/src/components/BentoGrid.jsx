import React from 'react';

const BentoGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-[10px] font-bold tracking-[0.5em] mb-12 text-center uppercase">Curated Selection</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
        {/* Large Feature */}
        <div className="md:col-span-2 md:row-span-2 bg-gray-100 group relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1539109132382-381bb3f1cff6?q=80&w=1000" className="w-full h-full object-cover  hover:scale-105 transition-transform duration-1000" alt="outerwear" />
          <div className="absolute bottom-10 left-10 text-white z-10">
            <p className="text-sm tracking-widest mb-2 font-medium">01</p>
            <h4 className="text-4xl font-black italic">OUTERWEAR</h4>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        {/* Text Block */}
        <div className="md:col-span-2 bg-black flex flex-col justify-center items-center text-white p-12 text-center border border-white/10">
          <p className="text-xs tracking-[0.3em] mb-4 text-gray-400">MANIFESTO</p>
          <h4 className="text-2xl md:text-3xl font-light italic leading-relaxed">"Simplicity is the ultimate sophistication in the digital age."</h4>
        </div>

        {/* Small Feature 1 */}
        <div className="bg-neutral-900 group relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=600" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="acc" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">ACCESSORIES</p>
          </div>
        </div>

        {/* Small Feature 2 */}
        <div className="bg-neutral-200 group relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600" className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-1000" alt="footwear" />
          <div className="absolute bottom-4 left-4">
             <p className="text-[10px] font-black bg-white px-2 py-1">FOOTWEAR</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;