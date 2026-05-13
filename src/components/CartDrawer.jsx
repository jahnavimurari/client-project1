import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeItem }) => {
  const subtotal = cart.reduce((acc, item) => {
    const priceStr = item.price.replace('₹', '').replace(',', '');
    const price = isNaN(parseInt(priceStr)) ? 0 : parseInt(priceStr);
    return acc + (price * item.quantity);
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background-dark/80 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background-dark border-l border-white/10 z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-secondary" />
                <h2 className="text-xl font-display font-bold uppercase tracking-widest">Your Cart</h2>
                <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <ShoppingBag size={64} strokeWidth={1} />
                  <p className="text-xl font-display italic">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-secondary text-sm font-bold uppercase tracking-widest hover:underline"
                  >
                    Start Adding Dishes
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={item.id} 
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold truncate pr-4">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-white/20 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-secondary font-bold text-sm mb-3">{item.price}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-black/40 rounded-lg border border-white/10 p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-secondary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-secondary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-white/[0.02] space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Taxes & Service</span>
                    <span>₹{(subtotal * 0.05).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xl font-display font-bold pt-2 border-t border-white/5">
                    <span>Total</span>
                    <span className="text-secondary">₹{(subtotal * 1.05).toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold group shadow-2xl shadow-primary/20">
                  Proceed to Checkout
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Plus size={20} className="rotate-45" />
                  </motion.div>
                </button>
                <p className="text-center text-xs text-white/20 uppercase tracking-widest font-bold">
                  Secure checkout powered by Bonalu Pay
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
