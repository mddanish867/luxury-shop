import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Navbar = ({ cartCount, onOpenCart }) => (
  <nav className="fixed w-full z-[60] bg-white/90 backdrop-blur-md border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <h1 className="text-2xl font-black tracking-tighter">VOID.</h1>
      <div className="hidden md:flex space-x-10 text-[10px] font-bold tracking-[0.3em]">
        <a href="#" className="hover:line-through transition-all">SHOP</a>
        <a href="#" className="hover:line-through transition-all">COLLECTIONS</a>
        <a href="#" className="hover:line-through transition-all">ABOUT</a>
      </div>
      <div className="flex items-center space-x-6">
        <button onClick={onOpenCart} className="relative group">
          <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        <Menu className="w-5 h-5 md:hidden cursor-pointer" />
      </div>
    </div>
  </nav>
);

export default Navbar;