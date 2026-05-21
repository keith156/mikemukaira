import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 uppercase tracking-widest font-medium">
            What's next?
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Let's work together.
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light mb-12">
            I'm currently available for freelance work and open to new opportunities. 
            If you have a project that needs some creative injection, let's talk.
          </p>

          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-full bg-primary text-black font-medium hover:bg-primary/90 hover:-translate-y-1 transition-all"
          >
            <Mail size={18} />
            Say Hello
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
