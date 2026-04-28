import { motion } from 'motion/react';
import { RESUME_DATA } from '../constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
          <div>
            <div className="section-label">03 // Core</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Capabilities</h2>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              A comprehensive stack designed for performance, scalability, and seamless user experiences across various web environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <div className="section-title text-xs mb-8 flex items-center">Technical Stack</div>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.Technical.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="section-title text-xs mb-8 flex items-center">Consulting & Ops</div>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.Interpersonal.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
