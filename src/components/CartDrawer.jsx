import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateQty, removeItem }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className={`fixed inset-0 z-[100] transition-all ${isOpen ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-black tracking-widest">YOUR BAG ({cart.length})</h2>
            <button onClick={onClose}><X /></button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-6">
            {cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b pb-6">
                <img src={item.img} className="w-20 h-24 object-cover" alt={item.name} />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-xs uppercase">{item.name}</h4>
                    <button onClick={() => removeItem(item.id)}><Trash2 className="w-4 h-4 text-gray-400" /></button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border">
                      <button className="p-1 px-2" onClick={() => updateQty(item.id, -1)}><Minus className="w-3 h-3"/></button>
                      <span className="px-2 text-xs">{item.qty}</span>
                      <button className="p-1 px-2" onClick={() => updateQty(item.id, 1)}><Plus className="w-3 h-3"/></button>
                    </div>
                    <span className="text-sm font-bold">${item.price * item.qty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-black">
            <div className="flex justify-between font-black mb-4"><span>TOTAL</span><span>${subtotal}</span></div>
            <button className="w-full bg-black text-white py-4 font-bold tracking-widest">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;