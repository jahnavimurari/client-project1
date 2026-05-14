import { motion } from 'framer-motion';

const images = [
  "/download.png",
  "/8d3687df07d599780dede172ffc0e48d.jpg",
  "/4fc818682f7709484e1c10e86d02d57a.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-display font-semibold tracking-widest uppercase mb-4">
            Visual Journey
          </h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold">
            Moments at <span className="text-primary">Bonalu</span>
          </h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary"
                >
                  <span className="text-2xl">+</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
