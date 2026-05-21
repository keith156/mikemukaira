import { motion } from 'motion/react';
import { ExternalLink, Building2 } from 'lucide-react';

const projects = [
  {
    title: 'Urban Masterplan Initiative',
    category: 'Urban Planning',
    description: 'A comprehensive city district masterplan integrating sustainable infrastructure, mixed-use zoning, and green public spaces to promote community resilience.',
    tags: ['GIS', 'AutoCAD', 'Master Planning', 'Sustainability'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
  },
  {
    title: 'Modern Residential Complex',
    category: 'Architecture',
    description: 'Design and execution of a mid-rise residential complex focusing on aesthetic functionalism, maximizing natural light, and optimizing spatial fluidty.',
    tags: ['Revit', 'SketchUp', '3D Rendering', 'Phase 4'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
  },
  {
    title: 'Commercial Estate Redevelopment',
    category: 'Real Estate Consulting',
    description: 'Strategic consultancy for the redevelopment of a commercial property. Analyzed land use policies, provided architectural insights, and aligned development goals with local zoning frameworks.',
    tags: ['Consultancy', 'Property Management', 'Feasibility Study'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-white/[0.01] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Featured Work</h2>
            <p className="text-white/50 mt-4 max-w-xl text-lg font-light">
              A selection of projects encompassing architectural design, urban planning, and real estate guidance.
            </p>
          </motion.div>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary flex items-center gap-2 hover:gap-3 hover:text-primary/80 transition-all text-sm uppercase tracking-widest font-medium"
          >
            All Projects <Building2 size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col ${idx === 2 ? 'lg:col-span-2 lg:flex-row' : ''}`}
            >
              <div className={`relative overflow-hidden ${idx === 2 ? 'lg:w-1/2 lg:h-auto' : 'h-64 sm:h-80'}`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              <div className={`p-8 md:p-10 flex flex-col justify-center ${idx === 2 ? 'lg:w-1/2' : ''}`}>
                <div className="text-sm font-bold text-primary mb-3 tracking-wider uppercase">
                  {project.category}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-white/60 mb-8 font-light line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-primary transition-colors"
                >
                  View Details <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
