import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Wrench, Cpu, Zap } from 'lucide-react';
import { contentData } from '../data/content';

const proficiencyData = [
  { label: 'Research', value: 90, color: 'from-primary to-secondary' },
  { label: 'ML Engineering', value: 85, color: 'from-secondary to-accent' },
  { label: 'Full-Stack', value: 80, color: 'from-accent to-primary' },
  { label: 'DevOps', value: 75, color: 'from-primary to-accent' },
];

export function Skills() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 border border-primary/20">
              <Cpu size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">Technical Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-semibold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
          </motion.div>

          {/* Skills Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 glass-card glass-card-hover border-primary/10 h-full relative overflow-hidden group">
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all">
                      <Code2 className="text-primary" size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {contentData.skills.technical.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.03 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-4 py-2 bg-background/50 border-primary/30 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all cursor-pointer font-medium"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              </Card>
            </motion.div>

            {/* Tools & Frameworks */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 glass-card glass-card-hover border-secondary/10 h-full relative overflow-hidden group">
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:border-secondary/40 transition-all">
                      <Wrench className="text-secondary" size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Tools & Frameworks</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {contentData.skills.tools.map((tool, i) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.03 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-4 py-2 bg-background/50 border-secondary/30 hover:bg-secondary/10 hover:border-secondary hover:scale-105 transition-all cursor-pointer font-medium"
                        >
                          {tool}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
              </Card>
            </motion.div>
          </div>

          {/* Proficiency Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-primary/10"
          >
            <div className="flex items-center gap-2 mb-8">
              <Zap className="text-primary" size={20} />
              <h3 className="text-xl font-semibold text-foreground">Proficiency Levels</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {proficiencyData.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Background circle */}
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="url(#gradient-${index})"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "251.2 251.2", strokeDashoffset: 251.2 }}
                        whileInView={{ 
                          strokeDashoffset: 251.2 - (251.2 * item.value) / 100 
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      />
                      {/* Gradient definition */}
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00E0FF" />
                          <stop offset="100%" stopColor="#7A5FFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        className="text-2xl font-bold text-primary"
                      >
                        {item.value}
                      </motion.span>
                    </div>
                  </div>

                  <p className="text-foreground/90 font-medium">{item.label}</p>
                  
                  {/* Linear progress bar */}
                  <div className="w-full bg-primary/10 rounded-full h-1.5 mt-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}