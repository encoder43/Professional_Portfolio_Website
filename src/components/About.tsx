import { motion } from 'motion/react';
import { Card } from './ui/card';
import { GraduationCap, Briefcase, Award, User } from 'lucide-react';
import { contentData } from '../data/content';

export function About() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 border border-primary/20">
              <User size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-semibold">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Background & Journey
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed"
            >
              {contentData.personal.bio}
            </motion.p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-8 glass-card glass-card-hover border-primary/10 h-full relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all border border-primary/20 group-hover:scale-110 duration-300">
                    <GraduationCap className="text-primary" size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-foreground/80 mb-2 font-medium">
                    {contentData.personal.degree}
                  </p>
                  <p className="text-sm text-primary font-medium">{contentData.personal.institution}</p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 glass-card glass-card-hover border-secondary/10 h-full relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-all border border-secondary/20 group-hover:scale-110 duration-300">
                    <Briefcase className="text-secondary" size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">Experience</h3>
                  <p className="text-sm text-foreground/80 mb-2 font-medium">Research Intern</p>
                  <p className="text-sm text-secondary font-medium">IIT Kharagpur</p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-8 glass-card glass-card-hover border-accent/10 h-full relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-all border border-accent/20 group-hover:scale-110 duration-300">
                    <Award className="text-accent" size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">Focus</h3>
                  <p className="text-sm text-foreground/80 mb-2 font-medium">Video Super-Resolution</p>
                  <p className="text-sm text-accent font-medium">Deep Learning & CV</p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
              </Card>
            </motion.div>
          </div>

          {/* Experience Section */}
          {contentData.experience && contentData.experience.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Professional Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contentData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <Card className="p-6 glass-card glass-card-hover border-primary/10 h-full relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                            <Briefcase className="text-white" size={20} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h4>
                            <p className="text-primary font-medium mb-2">{exp.institution}</p>
                            <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                          </div>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">{exp.focus}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-10 glass-card border-primary/20 relative overflow-hidden group">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Quote Marks */}
              <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">"</div>
              <div className="absolute bottom-4 right-4 text-6xl text-primary/10 font-serif rotate-180">"</div>

              <div className="relative z-10">
                <blockquote className="text-center">
                  <p className="text-lg md:text-xl italic text-foreground/90 mb-4 leading-relaxed">
                    Curiosity drives research; rigor makes it useful.
                  </p>
                  <div className="flex justify-center">
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                  </div>
                </blockquote>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}