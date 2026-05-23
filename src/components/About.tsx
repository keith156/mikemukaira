import { motion } from 'motion/react';
import { Map, Home, Briefcase, BookOpen } from 'lucide-react';

const coreRoles = [
  { name: 'Urban Planner', desc: 'Developing sustainable and resilient urban environments.', icon: Map },
  { name: 'Architect', desc: 'Designing functional and aesthetically pleasing spaces.', icon: Home },
  { name: 'Consultant', desc: 'Providing expert advice in real estate and architecture.', icon: Briefcase },
  { name: 'Lecturer', desc: 'Educating the next generation of architects.', icon: BookOpen },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 leading-tight">
              A curated selection of work in architecture and urban planning.
            </h2>
            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
              <p>
                My passion lies in creating innovative, functional, and human-centred spaces 
                while advancing sustainable and resilient urban environments. I provide 
                practical consultancy services to diverse clients and am committed to research, 
                knowledge sharing, and applying global best practices in local contexts.
              </p>
              <p>
                Beyond practice, I am dedicated to education and mentoring the next generation of professionals. 
                My focus is always on impactful, community-focused, and future-ready solutions that balance human needs 
                with environmental responsibility.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-4xl font-display font-bold text-primary mb-2">2x</h4>
                <p className="text-sm text-white/40 uppercase tracking-wider">Degrees (MSc & B.Arch)</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold text-primary mb-2">2016</h4>
                <p className="text-sm text-white/40 uppercase tracking-wider">Lecturing Since</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4"
          >
            {coreRoles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-white/[0.04] hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2">{role.name}</h3>
                    <p className="text-white/50 text-sm">{role.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
