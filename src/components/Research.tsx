import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { FlaskConical, Database, FileCode, Book, Award, Sparkles, TrendingUp } from 'lucide-react';
import { contentData } from '../data/content';

export function Research() {
  const { current, experience } = contentData.research;

  return (
    <section id="research" className="py-24 bg-background relative overflow-hidden section-chapter">
      {/* Background Neural Network Pattern */}
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 border border-secondary/20">
              <FlaskConical size={16} className="text-secondary" />
              <span className="text-sm text-secondary font-medium">Chapter 02</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-semibold">
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Research
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Currently working on video processing through deep learning from conceptual understanding to implementation.
            </p>
          </motion.div>

          {/* Current Research - Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-8 md:p-10 glass-card border-2 border-primary/30 mb-12 relative overflow-hidden group">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-primary/10 border border-primary/30 animate-glow">
                        <FlaskConical className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">{current.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/30">
                            <Sparkles size={12} className="mr-1" />
                            {current.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/90 mb-8 leading-relaxed text-lg">
                  {current.abstract}
                </p>

                {/* Key Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass-card p-5 rounded-xl border border-primary/20 hover-glow"
                  >
                    <div className="flex items-start gap-3">
                      <Database className="text-primary mt-1" size={20} />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-2 font-medium">Dataset</p>
                        <p className="text-foreground">{current.dataset}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="glass-card p-5 rounded-xl border border-primary/20 hover-glow"
                  >
                    <div className="flex items-start gap-3">
                      <FileCode className="text-primary mt-1" size={20} />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-2 font-medium">Methodologies</p>
                        <div className="flex flex-wrap gap-2">
                          {current.methods.map((method, i) => (
                            <motion.div
                              key={method}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                            >
                              <Badge
                                variant="outline"
                                className="bg-background/50 border-primary/30 text-xs hover:border-primary hover:bg-primary/10 transition-all"
                              >
                                {method}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Deliverables */}
                <div className="glass-card p-6 rounded-xl border border-primary/10 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={18} className="text-primary" />
                    <p className="text-sm font-medium text-foreground">Expected Deliverables</p>
                  </div>
                  <ul className="grid md:grid-cols-3 gap-4">
                    {current.deliverables.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary font-medium hover-glow"
                    disabled={!current.repo}
                  >
                    <Book size={14} className="mr-2" />
                    View Repository
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-secondary/30 hover:bg-secondary/10 hover:border-secondary font-medium"
                    disabled={!current.notebook}
                  >
                    <FileCode size={14} className="mr-2" />
                    Notebook / Repro
                  </Button>
                </div>
              </div>

              {/* Bottom Edge Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </Card>
          </motion.div>

          {/* Research Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-secondary/10 border border-secondary/30">
                <Award className="text-secondary" size={20} />
              </div>
              Research Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 glass-card glass-card-hover border-primary/10 h-full">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{exp.title}</h4>
                    <p className="text-primary mb-2 font-medium">{exp.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">{exp.focus}</p>
                    
                    {/* Bottom Accent Line */}
                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Demo Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-10 glass-card border-2 border-dashed border-primary/30 relative overflow-hidden group">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 border border-primary/20">
                  <Sparkles size={16} className="text-primary animate-pulse" />
                  <span className="text-sm text-primary font-medium">Coming Soon</span>
                </div>
                
                <h4 className="text-2xl font-semibold text-foreground mb-4">Interactive Demo</h4>
                
                <div className="glass-card rounded-2xl p-12 border-2 border-dashed border-primary/30 max-w-2xl mx-auto">
                  <div className="space-y-4">
                    <p className="text-lg text-foreground/80">
                      Video Super-Resolution Comparison Viewer
                    </p>
                    <p className="text-muted-foreground">
                      LR vs SR vs Ground Truth frame comparison with interactive sliders
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <div className="flex-1 h-2 bg-primary/20 rounded-full overflow-hidden max-w-xs">
                        <motion.div
                          animate={{ width: ['0%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-primary mt-6 italic">
                      Demo will be added once model training is complete
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Research Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-lg italic text-muted-foreground">
              <span className="neon-cyan">"</span>
              Research never ends — it evolves.
              <span className="neon-cyan">"</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}