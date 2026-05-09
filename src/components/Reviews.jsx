import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Food Blogger",
    content: "The best Natukodi Pulusu I've ever had outside of my village. The flavors are so authentic and the ambiance is just spectacular.",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    rating: 5
  },
  {
    name: "Priya Reddy",
    role: "Regular Customer",
    content: "Bonalu Kitchen has become our family's favorite weekend spot. The Hyderabadi Dum Biryani is a masterpiece every single time.",
    avatar: "https://i.pravatar.cc/150?u=priya",
    rating: 5
  },
  {
    name: "Anand Verma",
    role: "Tech Entrepreneur",
    content: "A truly premium dining experience. The attention to detail in both the food and the service is commendable. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=anand",
    rating: 5
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Director",
    content: "The Double Ka Meetha is to die for. I love how they balance traditional taste with a modern luxury setting.",
    avatar: "https://i.pravatar.cc/150?u=sneha",
    rating: 4
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-secondary font-display font-semibold tracking-widest uppercase mb-4">
            Guest Experiences
          </h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold">
            What Our <span className="text-primary">Diners</span> Say
          </h3>
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 px-4 py-8"
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] glass-card p-10 hover:bg-white/10 transition-all duration-500 border-b-4 border-secondary/0 hover:border-secondary group/card"
            >
              <Quote className="text-secondary opacity-20 mb-6 group-hover/card:opacity-100 transition-opacity" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-8 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-secondary/20" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
