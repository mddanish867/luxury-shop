import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onOpenModal }) => (
  <div className="group cursor-pointer">
    {/* Click image to open Modal */}
    <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 relative">
      <img 
        src={product.img} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700" 
      />
      {/* Click button to directly add to cart */}
      <button 
        onClick={(e) => { 
          e.stopPropagation(); // Prevents opening the modal when button is clicked
          onAddToCart(product); 
        }}
        className="absolute bottom-0 w-full py-4 bg-black text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-xs font-bold"
      >
        ADD TO BAG
      </button>
    </div>
    <div className="flex justify-between items-start" onClick={() => onOpenModal(product)}>
      <div>
        <h4 className="font-bold text-sm uppercase tracking-tight">{product.name}</h4>
        <p className="text-gray-400 text-xs mt-1 uppercase">Limited Release</p>
      </div>
      <p className="font-bold text-sm">${product.price}</p>
      <Star className="w-3 h-3 fill-black" />
    </div>
  </div>
);

export default ProductCard;