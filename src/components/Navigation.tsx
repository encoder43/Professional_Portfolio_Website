import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { contentData } from '../data/content';
import { Menu, X, Zap } from 'lucide-react';
const profileImg = new URL('../public/profile.png', import.meta.url).href;

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.href);
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card backdrop-blur-xl border-b border-primary/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-foreground hidden sm:inline-block font-medium group-hover:text-primary transition-colors ml-2">
              Yerram Deekshith Kumar
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {(() => {
              const raw = contentData.personal.resume;
              const resumeHref = raw && raw.startsWith('/')
                ? new URL('../public' + raw, import.meta.url).href
                : raw;
              return (
                <>
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.href
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
            
            <motion.a
              href={resumeHref}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-xl hover-glow transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">Resume</span>
              <Zap size={16} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
                </>
              );
            })()}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors glass-card rounded-lg hover-glow"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 border-t border-primary/10 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`px-4 py-3 rounded-lg font-medium transition-all text-left ${
                      activeSection === item.href
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                {(() => {
                  const raw = contentData.personal.resume;
                  const resumeHref = raw && raw.startsWith('/')
                    ? new URL('../public' + raw, import.meta.url).href
                    : raw;
                  return (
                    <motion.a
                  href={resumeHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="mt-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-xl text-center hover-glow flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <Zap size={16} />
                </motion.a>
                  );
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Border Glow */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      )}
    </motion.nav>
  );
}