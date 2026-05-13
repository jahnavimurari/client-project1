import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SpecialDishes from './components/SpecialDishes';
import Menu from './components/Menu';
import ChefSpecial from './components/ChefSpecial';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    // Check for existing user
    const savedUser = localStorage.getItem('bonalu_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-background-dark text-white selection:bg-primary selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Loading Screen */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background-dark flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-8"
          >
            <span className="text-5xl lg:text-7xl font-display font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              BK
            </span>
          </motion.div>
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-secondary"
            />
          </div>
          <p className="mt-6 text-secondary font-display tracking-[0.3em] uppercase text-sm animate-pulse">
            Heating up the stove...
          </p>
        </motion.div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Login 
            isOpen={isLoginOpen} 
            onClose={() => setIsLoginOpen(false)} 
            onAuthSuccess={(userData) => setUser(userData)}
          />
          <CartDrawer 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            clearCart={clearCart}
          />
          <Navbar 
            onLoginClick={() => setIsLoginOpen(true)} 
            onCartClick={() => setIsCartOpen(true)}
            user={user}
            onLogout={() => {
              localStorage.removeItem('bonalu_user');
              setUser(null);
            }}
            cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
          />
          <Hero />
          
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full pattern-overlay opacity-[0.03] pointer-events-none" />
            <About />
            <SpecialDishes addToCart={addToCart} />
            <Menu addToCart={addToCart} />
            <ChefSpecial />
            <Reviews />
            <Gallery />
            <BookingForm />
            <Contact />
          </div>
          
          <Footer />

          {/* Floating Actions */}
          <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            <motion.a
              href="https://wa.me/919123456789"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/20 hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={28} />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/20 hover:bg-primary-light transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </motion.main>
      )}
    </div>
  );
}

export default App;
