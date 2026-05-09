import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-background-dark/60 to-background-dark z-10" />
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
          alt="South Indian Spices"
          className="w-full h-full object-cover scale-110 animate-pulse-slow"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="text-left lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary font-display font-semibold tracking-[0.3em] uppercase mb-4">
                Taste the Tradition
              </h2>
              <h1 className="text-6xl lg:text-8xl font-display font-bold mb-6 leading-tight">
                BONALU <br />
                <span className="text-primary italic">KITCHEN</span>
              </h1>
              <p className="text-white/70 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
                Experience the soul of Telangana through our authentic flavors, slow-cooked with ancestral recipes and homemade spices.
              </p>

              <div className="flex flex-wrap justify-start gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 group"
                >
                  View Menu
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 text-white font-semibold group"
                >
                  <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Play size={20} fill="currentColor" />
                  </span>
                  Watch Story
                </motion.button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Patterns */}
      <div className="absolute bottom-0 left-0 w-full h-32 pattern-overlay opacity-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
