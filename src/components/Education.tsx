import { motion } from 'motion/react';
import { graduationCap } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const EducationAndExtra = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/10">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <div className="section-label">04 // Knowledge</div>
          <h2 className="text-4xl font-extrabold text-white mb-12">Education</h2>
          
          <div className="space-y-12">
            {RESUME_DATA.education.map((edu, index) => (
              <div key={index} className="relative group">
                <div className="text-[10px] font-mono text-brand-primary mb-2">{edu.dates}</div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-white/40 text-sm mb-4">{edu.institution}</p>
                <div className="text-xs text-slate-500 leading-relaxed max-w-sm">{edu.details}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="section-label">05 // Leadership</div>
          <h2 className="text-4xl font-extrabold text-white mb-12">Activities</h2>
          
          <div className="p-10 bg-white/[0.02] border border-white/10 rounded-sm">
            {RESUME_DATA.leadership.map((lead, index) => (
              <div key={index}>
                <div className="text-[10px] font-mono text-brand-primary mb-2">{lead.dates}</div>
                <h4 className="text-xl font-bold text-white mb-2">{lead.role}</h4>
                <p className="text-white/40 text-xs mb-4">{lead.organization}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{lead.bullets[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
