import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Happy Customers', value: '5000+' },
    { label: 'Authentic Dishes', value: '50+' },
    { label: 'Chef Awards', value: '12' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background-charcoal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Single Image Side */}
          <div className="flex-1 relative group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(139,0,0,0.2)] border border-white/10 group-hover:shadow-[0_0_70px_rgba(212,175,55,0.3)] transition-all duration-700"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src="/8d3687df07d599780dede172ffc0e48d.jpg" 
                  alt="Bonalu Kitchen Signature" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
            
            {/* Background Glows */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary font-display font-semibold tracking-widest uppercase mb-4">
                Our Legacy
              </h2>
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
                Crafting Culinary <span className="text-primary">Masterpieces</span> since 2014
              </h3>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Bonalu Kitchen is more than just a restaurant; it's a celebration of Telangana's rich heritage. We bring you the authentic flavors of the land, prepared with spices ground in-house and techniques passed down through generations.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Authentic Recipes', 'Traditional Spices', 'Village Style Cooking', 'Family Atmosphere'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="text-secondary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="text-3xl font-display font-bold text-secondary mb-1">{stat.value}</h4>
                      <p className="text-white/50 text-xs uppercase tracking-widest">{stat.label}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
