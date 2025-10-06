import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { FileText, Download, BookOpen, Sparkles } from 'lucide-react';
import { contentData } from '../data/content';

export function Publications() {
  return (
    <section id="publications" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 border border-secondary/20">
              <BookOpen size={16} className="text-secondary" />
              <span className="text-sm text-secondary font-medium">Academic Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-semibold">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Publications
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Research contributions and academic work
            </p>
          </motion.div>

          <div className="space-y-6">
            {contentData.publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 glass-card glass-card-hover border-primary/10 relative overflow-hidden group">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center flex-shrink-0 border border-secondary/20 group-hover:border-secondary/40 transition-all">
                      <BookOpen className="text-secondary" size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {pub.authors.join(', ')}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/30 px-3 py-1"
                        >
                          {pub.type === 'conference' ? 'Conference' : 'Journal'}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <span className="text-primary font-medium">{pub.venue}</span>
                        <span className="text-primary/50">•</span>
                        <span className="text-foreground/70">{pub.year}</span>
                      </div>

                      <p className="text-sm text-foreground/80 mb-5 leading-relaxed">{pub.summary}</p>

                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/30 hover:bg-primary/10 hover:border-primary font-medium hover-glow"
                          disabled={!pub.pdf}
                        >
                          <FileText size={14} className="mr-2" />
                          PDF
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-secondary/30 hover:bg-secondary/10 hover:border-secondary font-medium"
                          disabled={!pub.bibtex}
                        >
                          <Download size={14} className="mr-2" />
                          BibTeX
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Card className="p-8 glass-card border-dashed border-primary/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
              <div className="relative z-10">
                <Sparkles className="mx-auto mb-3 text-primary animate-pulse" size={24} />
                <p className="text-foreground/80 text-sm">
                  More publications coming soon as research progresses
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}