import React from 'react';
import { X, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className={`fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 transition-all ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      
      {/* Modal Content */}
      <div className={`relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-all duration-500 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full hover:bg-black hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="bg-gray-100 h-[400px] md:h-full">
          <img src={product.img} className="w-full h-full object-cover transition-all duration-1000" alt={product.name} />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 mb-2 uppercase">Core Collection</span>
          <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">{product.name}</h2>
          <p className="text-2xl font-light mb-8">${product.price}</p>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Engineered with high-performance fabrics for the urban environment. This piece features a modular design, water-resistant coating, and reinforced stitching for maximum durability in all conditions.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" /> 2-Year Limited Warranty
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase">
              <Truck className="w-4 h-4" /> Express Global Shipping
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase">
              <RefreshCcw className="w-4 h-4" /> 30-Day Aesthetic Guarantee
            </div>
          </div>

          <button 
            onClick={() => { onAddToCart(product); onClose(); }}
            className="w-full py-5 bg-black text-white font-black tracking-[0.3em] hover:bg-neutral-800 transition-colors"
          >
            ADD TO BAG — ${product.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;