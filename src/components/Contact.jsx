import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Section */}
          <div className="flex-1">
            <h2 className="text-secondary font-display font-semibold tracking-widest uppercase mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-10">
              Visit the <span className="text-primary">Soul</span> of Telangana
            </h3>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Location</h4>
                  <p className="text-white/60 leading-relaxed">
                    Plot No. 124, Jubilee Hills, Road No. 36,<br />
                    Hyderabad, Telangana 500033
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Reservations</h4>
                  <p className="text-white/60 leading-relaxed">
                    +91 91234 56789<br />
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary flex-shrink-0">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Chat with Us</h4>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-green-500 font-bold"
                  >
                    WhatsApp Support →
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: '#8B0000' }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="flex-1 min-h-[400px] rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-background-dark/20 z-10" />
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop"
              alt="Map Placeholder"
              className="w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="glass-card p-8 text-center max-w-sm">
                <MapPin className="text-primary mx-auto mb-4" size={40} />
                <h4 className="text-2xl font-bold mb-2">Bonalu Kitchen</h4>
                <p className="text-white/60 mb-6">Interactive map is coming soon. Use the address listed to find us.</p>
                <button className="btn-primary py-2 px-8 text-sm">Open in Google Maps</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
