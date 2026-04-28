/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SplashLoader } from './components/SplashLoader';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationAndExtra } from './components/Education';
import { Navbar, Footer } from './components/NavFooter';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative antialiased selection:bg-brand-primary/30 scroll-smooth">
      <AnimatePresence mode="wait">
        {loading ? (
          <div key="loader">
            <SplashLoader onComplete={() => setLoading(false)} />
          </div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col w-full"
          >
            <AnimatedBackground />
            <Navbar />
            
            <div className="relative">
              <Hero />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-100px" }}
              >
                <Experience />
                <Projects />
                <Skills />
                <EducationAndExtra />
              </motion.div>

              <Footer />
            </div>

            {/* Custom Cursor / Noise / Grain effects could go here for extra premium feel */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
