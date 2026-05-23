import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import portraitImage from '../assets/images/regenerated_image_1779528929736.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 lg:pb-0 overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-white/5 to-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 tracking-wide uppercase font-medium">
              Michael Mukaira A.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tighter leading-tight"
          >
            Designing
            <br />
            <span className="text-primary text-opacity-80">urban futures.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-white/50 max-w-xl font-light"
          >
            Urban Planner, Architect, Consultant, and Educator. 
            Creating innovative, functional, and human-centred spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(232, 112, 50, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-primary text-black font-medium hover:bg-primary/90 transition-colors text-center shadow-lg shadow-primary/20"
            >
              Explore Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/5 text-white font-medium border border-white/10 transition-colors text-center"
            >
              My Philosophy
            </motion.a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="relative flex justify-center lg:justify-end"
        >
          {/* Using a placeholder. When the user drops their image into the public folder, it replaces this */}
          <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-black">
            {/* Blend gradients to fade image cleanly into black background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              src={portraitImage} 
              alt="Portrait"
              onError={(e) => {
                // Fallback to an unplash placeholder if the image is not uploaded yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800&h=1000";
              }}
              className="w-full h-full object-cover object-top transition-opacity duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
