import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { id: 1, name: "Urban Tech Shell", price: 240, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5" },
    { id: 2, name: "Noir Tote Bag", price: 120, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
    { id: 3, name: "Metric Runner", price: 180, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 4, name: "Void Eyewear", price: 310, img: "https://images.unsplash.com/photo-1511499767390-903390e6fbc4" },
  ];

  const openProductView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white">
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

        <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={addToCart}
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        updateQty={updateQty}
        removeItem={removeItem}
      />
      <main>
        <Hero />
        <BentoGrid />
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(p => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onAddToCart={addToCart} 
                onOpenModal={openProductView} 
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;