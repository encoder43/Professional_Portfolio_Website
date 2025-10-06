import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Github, Linkedin, MapPin, Mail, Sparkles } from 'lucide-react';
import { contentData } from '../data/content';
import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
const profileImg = new URL('../public/profile.png', import.meta.url).href;

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "I work on images, videos and text(NLP) based research & production ML systems.";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Enhanced particle neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = [
      'rgba(0, 224, 255,', // Cyan
      'rgba(122, 95, 255,', // Violet
      'rgba(255, 172, 65,', // Accent
    ];

    // Create particles
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Pulse opacity
        particle.opacity = 0.3 + Math.sin(Date.now() * 0.001 + i) * 0.2;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, `${particle.color} ${particle.opacity})`);
        gradient.addColorStop(1, `${particle.color} 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections (neural network effect)
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            const opacity = (1 - distance / 180) * 0.3;
            ctx.strokeStyle = `rgba(0, 224, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* Grid Overlay */}
      <div className="grid-overlay" />
      
      {/* Gradient Lighting */}
      <div className="gradient-light absolute inset-0 pointer-events-none" />
      
      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full border border-primary/30 text-primary animate-glow">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-medium">ML Researcher & Engineer</span>
            </span>
          </motion.div>
          
          {/* Profile Image */}
          <div className="mx-auto mb-0 flex justify-center">
            <ImageWithFallback
              src={profileImg}
              alt="Profile photo"
              className="h-26 w-25 md:h-26 md:w-26 rounded-full object-cover border border-primary/30 shadow-lg"
            />
          </div>

          {/* Animated Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-1 font-semibold"
          >
            <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
              {contentData.personal.name.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="inline-block mr-3 md:mr-4"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(0, 224, 255, 0.3))',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-2"
          >
            {contentData.personal.title}
          </motion.p>
          
          {/* Typing Effect Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-4"
          >
            <p className="text-lg md:text-xl text-foreground/90 italic min-h-[2em]">
              {typedText}
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
            </p>
          </motion.div>

          {/* Location & Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10 text-muted-foreground"
          >
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg hover-glow">
              <MapPin size={16} className="text-primary" />
              <span>{contentData.personal.location}</span>
            </div>
            <span className="hidden sm:inline text-primary/50">•</span>
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg hover-glow">
              <Mail size={16} className="text-primary" />
              <span className="text-sm md:text-base">{contentData.personal.email}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#research')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl hover-glow shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              View Research
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#projects')}
              className="glass-card border-primary/30 hover:border-primary font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              See Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={contentData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover-glow rounded-xl border border-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href={contentData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card hover-glow rounded-xl border border-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="text-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full p-1 backdrop-blur-sm"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </motion.div>
      </motion.div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
}