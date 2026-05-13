import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, X, Github, Chrome as Google } from 'lucide-react';

const Login = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Simulate authentication/storage
      const userData = { email, lastLogin: new Date().toISOString() };
      localStorage.setItem('bonalu_user', JSON.stringify(userData));
      onAuthSuccess(userData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl"
        >
          {/* Background Gradient Decorative */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="relative z-10 p-8 pt-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-white/60">
                {isLogin 
                  ? 'Sign in to access your favorite flavors' 
                  : 'Join the Bonalu Kitchen family today'}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-secondary transition-all"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                  <input 
                    type="password" 
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-secondary transition-all"
                  />
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <button type="button" className="text-sm text-secondary hover:underline">
                    Forgot Password?
                  </button>
                </div>
              )}

              <button type="submit" className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-2 group">
                {isLogin ? 'Sign In' : 'Sign Up'}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4 text-white/20">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-xs uppercase tracking-widest">Or continue with</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-all">
                <Google size={20} />
                <span className="text-sm">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-all">
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </button>
            </div>

            {/* Toggle Login/Signup */}
            <p className="mt-10 text-center text-white/60 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-secondary font-bold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
