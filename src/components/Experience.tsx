import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Urban Planner',
    company: 'Makerere University - Kampala, UGANDA',
    period: 'MSc. Urban Planning and Design',
    description: 'Focused on developing sustainable and resilient urban environments. My approach integrates social, economic, and environmental considerations to create thriving communities.',
  },
  {
    role: 'Architect',
    company: 'Nizhny Novgorod State University - RUSSIA',
    period: 'B. Arch.',
    description: 'Specializing in designing functional and aesthetically pleasing spaces that meet diverse client needs, balancing creative design with technical precision.',
  },
  {
    role: 'Real Estate Consultant',
    company: 'RPG - Real Property Guidance (Kampala, UGANDA)',
    period: 'Sole Proprietorship',
    description: 'Providing expert consultancy in Real Estate, Architecture & Land Management. Offering strategic guidance that aligns with client goals and regulatory frameworks.',
  },
  {
    role: 'PT Lecturer',
    company: 'Kyambogo University (Kampala, UGANDA)',
    period: '2016 - Present',
    description: 'Dedicated to mentoring the next generation of architects and urban planners by fostering critical thinking and teaching practical, industry-forward skills.',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Experience & Expertise</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto font-light">
            A diverse background cutting across urban planning, architectural design, consultancy, and academia.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 self-start md:self-center mt-2 md:mt-0 relative z-10 transition-colors group-hover:border-primary group-hover:bg-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary transition-colors animate-pulse"></div>
              </div>
              
              {/* card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="flex flex-col mb-4">
                  <span className="text-sm font-semibold text-primary/80 tracking-wider mb-2 uppercase">{exp.period}</span>
                  <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                  <span className="text-white/70 tracking-wide">{exp.company}</span>
                </div>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
