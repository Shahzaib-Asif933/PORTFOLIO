import { motion, useScroll, useSpring } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-sm font-bold uppercase tracking-tighter">
            Shahzaib <span className="text-brand-primary">Asif</span>
          </div>
          <div className="hidden md:flex gap-6 border-l border-white/10 pl-6 h-4 items-center">
            {['Experience', 'Projects', 'Skills'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono text-[10px] text-white/30">
           <a href={`mailto:${RESUME_DATA.basics.email}`} className="hover:text-brand-primary transition-colors">MAIL</a>
           <a href={RESUME_DATA.basics.links[0].url} target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">LI</a>
        </div>
      </div>
      <ProgressBar />
    </nav>
  );
};

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    return <motion.div className="h-[1px] bg-brand-primary origin-left" style={{ scaleX }} />;
};

export const Footer = () => {
  return (
    <footer className="py-20 px-10 border-t border-white/5 bg-slate-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
           <div className="section-label">Archive // 2024</div>
           <h2 className="text-2xl font-bold mb-4">Shahzaib Asif</h2>
           <p className="text-slate-500 text-sm leading-relaxed">
             WordPress & Frontend Specialist focused on geometric precision and digital balance.
           </p>
        </div>

        <div className="flex flex-col gap-4">
           <div className="section-title text-[10px]">Registry</div>
           <div className="flex gap-4">
              <a href={RESUME_DATA.basics.links[0].url} className="text-white/40 hover:text-brand-primary">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${RESUME_DATA.basics.email}`} className="text-white/40 hover:text-brand-primary">
                <Mail className="w-4 h-4" />
              </a>
           </div>
           <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] mt-8">
             &copy; {new Date().getFullYear()} S.A. Digital Systems
           </p>
        </div>
      </div>
    </footer>
  );
};
