import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Experience', href: '#experience' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-bold tracking-tight z-50 relative text-foreground">
          M<span className="text-primary">M</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-primary text-black text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden z-50 relative text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            clipPath: mobileMenuOpen ? 'circle(150% at top right)' : 'circle(0% at top right)',
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pointer-events-auto md:hidden"
          style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-3xl font-display font-medium text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
}
