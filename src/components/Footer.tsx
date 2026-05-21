import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-display font-bold text-white">M<span className="text-primary">M</span></span>
          <span className="text-white/30 text-sm">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-white/40 hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-white/40 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-white/40 hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
