import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/WhatsApp Image 2026-05-09 at 7.27.14 PM.jpeg" 
                alt="Bonalu Kitchen Logo" 
                className="h-16 w-16 object-contain rounded-full border border-secondary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]" 
              />
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-secondary to-accent-orange bg-clip-text text-transparent">
                BONALU KITCHEN
              </span>
            </div>
            <p className="text-white/40 leading-relaxed">
              Bringing the authentic heart of Telangana to your table. Premium dining, traditional recipes, and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-display uppercase tracking-widest text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Menu', 'Specials', 'Reservations'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-display uppercase tracking-widest text-secondary">Hours</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Thu</span>
                <span className="text-white font-medium">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Fri - Sat</span>
                <span className="text-white font-medium">11:00 - 23:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-white font-medium">09:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-display uppercase tracking-widest text-secondary">Newsletter</h4>
            <p className="text-white/40 text-sm">Join our mailing list for special offers and updates.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 pr-14 outline-none focus:border-secondary transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} Bonalu Kitchen. All Rights Reserved. Designed with Love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
