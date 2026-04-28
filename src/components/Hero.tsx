import { motion } from 'motion/react';
import { MousePointer2, FileText } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 sm:px-12">
      {/* Background structural hints */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-white/[0.03]" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-white/[0.03]" />
      <div className="absolute top-[30%] left-0 w-full h-px bg-white/[0.03]" />
      <div className="absolute top-[70%] left-0 w-full h-px bg-white/[0.03]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-5xl"
      >
        <div className="section-label">System // Status: Active</div>
        
        <h1 className="text-7xl md:text-[120px] font-extrabold mb-4 leading-[0.9] tracking-tighter text-white">
          {RESUME_DATA.basics.name.split(' ')[0]}<br />
          <span className="text-brand-primary">{RESUME_DATA.basics.name.split(' ')[1]}</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-10 overflow-hidden">
          <div className="h-px w-12 bg-white/20" />
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-white/40">
            {RESUME_DATA.basics.title}
          </h2>
          <div className="h-px w-12 bg-white/20" />
        </div>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {RESUME_DATA.basics.summary}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href="#experience"
            whileHover={{ y: -2 }}
            className="w-full sm:w-auto px-10 py-4 bg-brand-primary text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
          >
            Explore Records
            <MousePointer2 className="w-3 h-3" />
          </motion.a>
          
          <motion.button
            whileHover={{ y: -2 }}
            className="w-full sm:w-auto px-10 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
          >
            Documentation
            <FileText className="w-3 h-3 text-brand-primary" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
