import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Award, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { contentData } from '../data/content';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof contentData.certifications[0] | null>(null);

  const getOrgColor = (org: string) => {
    const colors: Record<string, string> = {
      'Isha Foundation': 'from-orange-500 to-orange-600',
      'DeepLearning.AI': 'from-blue-500 to-blue-600',
      'NPTEL': 'from-green-500 to-green-600',
      'University at Buffalo': 'from-indigo-500 to-indigo-600',
      'IIIT Hyderabad': 'from-purple-500 to-purple-600',
      'Goldman Sachs': 'from-amber-500 to-amber-600',
    };
    return colors[org] || 'from-primary to-secondary';
  };

  return (
    <section id="certifications" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 border border-accent/20">
              <Award size={16} className="text-accent" />
              <span className="text-sm text-accent font-medium">Credentials</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-semibold">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional development and specialized training
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 glass-card glass-card-hover border-primary/10 group cursor-pointer h-full flex flex-col relative overflow-hidden"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getOrgColor(cert.organization)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Award className="text-white" size={26} />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-primary mb-3 font-medium">{cert.organization}</p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Calendar size={12} />
                      <span>Issued {cert.issued}</span>
                    </div>

                    <div className="mt-auto pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary font-medium hover-glow"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert(cert);
                        }}
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Show Credential
                      </Button>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Certification Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="mt-12 p-8 glass-card border-2 border-accent/30 relative overflow-hidden group">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={36} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-full mb-3 border border-accent/30">
                    <Sparkles size={12} className="text-accent animate-pulse" />
                    <span className="text-xs text-accent font-medium">Recently Completed</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Inner Engineering Program</h3>
                  <p className="text-primary mb-2 font-medium">Isha Foundation</p>
                  <p className="text-sm text-foreground/70">
                    Personal development and well-being program completed in October 2025
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-accent/30 hover:bg-accent/10 hover:border-accent font-medium hover-glow"
                    onClick={() => {
                      const ishaCert = contentData.certifications.find(
                        (c) => c.organization === 'Isha Foundation'
                      );
                      if (ishaCert) setSelectedCert(ishaCert);
                    }}
                  >
                    View Credential
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-3xl glass-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-foreground text-2xl">{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          {selectedCert && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getOrgColor(selectedCert.organization)} flex items-center justify-center shadow-lg`}>
                  <Award className="text-white" size={26} />
                </div>
                <div>
                  <p className="text-primary font-medium text-lg">{selectedCert.organization}</p>
                  <p className="text-sm text-muted-foreground">Issued {selectedCert.issued}</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-12 border-2 border-dashed border-primary/30 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
                <div className="relative z-10">
                  <Award size={48} className="mx-auto mb-4 text-primary opacity-50" />
                  <p className="text-foreground/80 mb-2">Certificate Preview</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {selectedCert.credential
                      ? 'Certificate document will be displayed here'
                      : 'Certificate credential information not available yet'}
                  </p>
                  {selectedCert.credential && (
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background font-semibold hover-glow">
                      <ExternalLink size={16} className="mr-2" />
                      Verify Credential
                    </Button>
                  )}
                </div>
              </div>

              <div className="text-sm text-muted-foreground text-center italic">
                <p>
                  Note: Replace certificate URLs in data/content.ts to display actual credentials
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}