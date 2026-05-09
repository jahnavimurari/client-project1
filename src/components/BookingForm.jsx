import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, Send, CheckCircle } from 'lucide-react';

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-24 bg-background-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card overflow-hidden flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="flex-1 p-10 lg:p-16 border-r border-white/10">
            <h3 className="text-4xl font-display font-bold mb-8">
              Reserve Your <span className="text-secondary">Table</span>
            </h3>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-secondary transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-secondary transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                        <select
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 outline-none focus:border-secondary appearance-none transition-all"
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="4">4 People</option>
                          <option value="6">6+ People</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                        <input
                          required
                          type="date"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 outline-none focus:border-secondary transition-all"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                        <input
                          required
                          type="time"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 outline-none focus:border-secondary transition-all"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Special Message (Optional)</label>
                    <textarea
                      rows="4"
                      placeholder="Any allergies or special requests?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 outline-none focus:border-secondary transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary py-5 flex items-center justify-center gap-3 text-lg"
                  >
                    Confirm Reservation <Send size={20} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-secondary" size={40} />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Table Reserved!</h4>
                  <p className="text-white/60 text-lg">We've received your request and will confirm via phone shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-[350px] bg-primary p-10 lg:p-16 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-8">Need Help?</h4>
              <ul className="space-y-8">
                <li>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Direct Call</p>
                  <p className="text-xl font-bold">+91 91234 56789</p>
                </li>
                <li>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold">dine@bonalu.com</p>
                </li>
                <li>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Opening Hours</p>
                  <p className="text-lg font-medium">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </li>
              </ul>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 pattern-overlay opacity-10 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
