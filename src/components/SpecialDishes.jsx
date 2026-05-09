import { motion } from 'framer-motion';
import { Star, Plus } from 'lucide-react';
import { menuItems } from '../data/menu';

const SpecialDishes = () => {
  const specials = menuItems.filter(item => item.isSpecial);

  return (
    <section id="specials" className="py-24 bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-secondary font-display font-semibold tracking-widest uppercase mb-4"
          >
            Chef's Recommendations
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-bold"
          >
            Our <span className="text-primary">Special</span> Dishes
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={14} className="text-secondary fill-secondary" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-display font-bold group-hover:text-secondary transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-secondary font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-white/60 mb-8 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <button className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    Details
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary-light transition-colors"
                  >
                    <Plus size={24} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
