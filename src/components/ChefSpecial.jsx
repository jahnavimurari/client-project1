import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const ChefSpecial = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550966841-3ee7adac1af8?q=80&w=2000&auto=format&fit=crop"
          alt="Chef Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-background-dark/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[60px] overflow-hidden border-8 border-secondary/20 aspect-[4/5] bg-black">
                {/* Executive Chef Label Overlay */}
                <div className="absolute top-8 left-8 z-20">
                  <span className="text-white text-sm font-display font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    Executive Chef
                  </span>
                </div>

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/WhatsApp Video 2026-05-09 at 6.30.25 PM.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Quote size={60} className="text-secondary opacity-30 mb-8" />
              <h2 className="text-secondary font-display font-semibold tracking-widest uppercase mb-4">
                Signature Dish of the Day
              </h2>
              <h3 className="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                Gongura <span className="text-primary">Mutton</span> Pulao
              </h3>
              <p className="text-white/70 text-xl italic mb-10 leading-relaxed">
                "Cooking is an art, but food is a feeling. Every dish at Bonalu Kitchen is a tribute to my mother's kitchen and the vibrant streets of Hyderabad. We don't just serve food; we serve memories."
              </p>
              
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-0.5 bg-secondary" />
                <div>
                  <h4 className="text-xl font-bold font-display">Chef Srinivas Rao</h4>
                  <p className="text-white/40 uppercase tracking-widest text-xs">Executive Chef & Founder</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn-primary"
              >
                Learn More About Our Story
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSpecial;
