import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { contentData } from '../data/content';
const profileImg = new URL('../public/profile.png', import.meta.url).href;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10 relative overflow-hidden">
      {/* Pulse Line Animation - Continuous Learning Heartbeat */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-line" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-3 group cursor-pointer" onClick={scrollToTop}>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  Yerram Deekshith Kumar
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-md leading-relaxed">
                M.Tech Student in Signal & Image Processing at NIT Rourkela. Building and learning research-grade ML systems and pushing the boundaries of my personal self and computer vision.
              </p>
              <div className="flex gap-3">
                <motion.a
                  href={contentData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl glass-card hover-glow border border-primary/20 flex items-center justify-center group"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} className="text-foreground group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href={contentData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl glass-card hover-glow border border-primary/20 flex items-center justify-center group"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} className="text-foreground group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href={`mailto:${contentData.personal.email}`}
                  className="w-11 h-11 rounded-xl glass-card hover-glow border border-primary/20 flex items-center justify-center group"
                  aria-label="Email"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} className="text-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {['Home', 'Projects', 'Research', 'Publications'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* More Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-foreground font-semibold mb-4">More</h4>
              <ul className="space-y-2.5">
                {['Certifications', 'Contact'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                      {item}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {(() => {
                    const raw = contentData.personal.resume;
                    const resumeHref = raw && raw.startsWith('/')
                      ? new URL('../public' + raw, import.meta.url).href
                      : raw;
                    return (
                      <a
                    href={resumeHref}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    Resume
                  </a>
                    );
                  })()}
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} Yerram Deekshith Kumar. Crafted with
              <Heart size={14} className="text-red-500 animate-pulse" />
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="px-3 py-1.5 glass-card rounded-lg border border-primary/20">
                  React
                </span>
                <span className="text-primary/50">+</span>
                <span className="px-3 py-1.5 glass-card rounded-lg border border-secondary/20">
                  Tailwind CSS
                </span>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="w-11 h-11 rounded-xl glass-card hover-glow border border-primary/30 flex items-center justify-center group"
                aria-label="Scroll to top"
                whileHover={{ scale: 1.1, rotate: -360 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6 }}
              >
                <ArrowUp size={20} className="text-primary group-hover:text-secondary transition-colors" />
              </motion.button>
            </div>
          </motion.div>

          {/* Easter Egg Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-xs italic text-muted-foreground/50">
              "Continuous Learning" — The algorithm never stops
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}