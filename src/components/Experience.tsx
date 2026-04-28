import { motion } from 'motion/react';
import { RESUME_DATA } from '../constants';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/10">
      <div className="mb-20">
        <div className="section-label">01 // Expertise</div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white">Work <span className="text-brand-primary">History</span></h2>
      </div>

      <div className="space-y-12">
        {RESUME_DATA.experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="grid md:grid-cols-[1fr_300px] gap-8 pb-12 border-b border-white/5 group-last:border-0">
               <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="font-mono text-sm text-brand-primary mb-6 flex items-center gap-4">
                    {exp.company}
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-white/40">{exp.location}</span>
                  </p>
                  
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                        <span className="text-brand-primary font-bold shrink-0">·</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="flex flex-col md:items-end justify-between py-1">
                  <div className="text-right">
                    <div className="tag-pill mb-4 inline-block">{exp.dates}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                     {exp.metrics?.slice(0, 2).map((m) => (
                        <div key={m} className="p-4 bg-white/[0.02] border border-white/10 rounded-sm">
                           <div className="text-[10px] font-mono text-white/30 uppercase mb-1">Index</div>
                           <div className="text-xs font-bold text-white/80">{m}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
