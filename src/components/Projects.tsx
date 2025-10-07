import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, CheckCircle2, Activity } from 'lucide-react';
import { contentData } from '../data/content';

interface TiltCardProps {
  children: React.ReactNode;
  index: number;
}

function TiltCard({ children, index }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden section-chapter">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 border border-primary/20">
              <Activity size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">Chapter 01</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-semibold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Personal Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learning by building  ML applications from Agent based systems to video processing systems.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {contentData.projects.map((project, index) => (
              <TiltCard key={index} index={index}>
                <Card
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="h-full p-6 glass-card glass-card-hover border-primary/10 relative overflow-hidden group"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.status === 'live' && (
                          <Badge className="bg-primary/10 text-primary border-primary/30">
                            <CheckCircle2 size={12} className="mr-1" />
                            Live
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights with enhanced styling */}
                    <ul className="space-y-2.5 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className="text-primary mt-1 font-bold">▹</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-background/50 border-primary/20 text-xs hover:border-primary hover:bg-primary/5 transition-all"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.demo && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary hover-glow font-medium"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink size={14} className="mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-border hover:bg-muted hover:border-secondary font-medium"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github size={14} className="mr-2" />
                          Code
                        </Button>
                      )}
                    </div>

                    {/* Hover Metrics Indicator (Visual Enhancement) */}
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-primary/20"
                      >
                        <div className="flex items-center gap-2 text-xs text-primary">
                          <div className="flex-1 h-1.5 bg-primary/20 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '85%' }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            />
                          </div>
                          <span className="font-medium">Impact</span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom Edge Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}