import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User } from 'lucide-react';

const Navbar = ({ onLoginClick, onCartClick, user, onLogout, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background-dark/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative">
            <img 
              src="/WhatsApp Image 2026-05-09 at 7.27.14 PM.jpeg" 
              alt="Bonalu Kitchen Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-full border-2 border-secondary/30 group-hover:border-secondary transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]" 
            />
            <div className="absolute inset-0 rounded-full bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className="nav-link text-sm uppercase tracking-widest font-medium"
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  const id = link.href.substring(1);
                  if (id) {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={onCartClick}
            className="text-white hover:text-secondary transition-colors relative"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-xs text-secondary font-bold hidden md:block truncate max-w-[100px]">
                {user.email.split('@')[0]}
              </span>
              <button 
                onClick={onLogout}
                className="text-white/60 hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={onLoginClick}
              className="text-white hover:text-secondary transition-colors"
            >
              <User size={20} />
            </button>
          )}
          <a href="#booking" className="btn-primary py-2 px-6 text-sm">
            Book Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-background-dark/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-display font-medium hover:text-secondary transition-colors"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    const id = link.href.substring(1);
                    if (id) {
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <a href="#booking" className="btn-primary mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Book Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
