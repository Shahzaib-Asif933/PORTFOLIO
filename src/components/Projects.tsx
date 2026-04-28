import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="section-label">02 // Iterations</div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">Project <span className="text-brand-primary">Archive</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-10 group hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                  Release v.0{index + 1}
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-brand-primary transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">
                {project.bullets[0]}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-white/40 uppercase tracking-tighter">
                    #{tech}
                  </span>
                ))}
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-sm">
                 <div className="text-[10px] font-mono text-brand-primary uppercase mb-2">Impact // Metric</div>
                 <div className="text-sm font-semibold text-white/90 italic">{project.achievements[0]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
