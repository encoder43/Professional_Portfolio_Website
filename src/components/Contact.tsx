import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Github, Send, MapPin, MessageCircle } from 'lucide-react';
import { contentData } from '../data/content';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${contentData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast.success('Opening email client...', {
      description: 'Your default email application will open with the message.',
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden section-chapter">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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
              <MessageCircle size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-semibold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to research collaborations, project discussions, and opportunities in ML/AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 glass-card glass-card-hover border-primary/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                    
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:border-primary/40 transition-all">
                          <Mail className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1 font-medium">Email</p>
                          <a
                            href={`mailto:${contentData.personal.email}`}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {contentData.personal.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0 border border-secondary/20 group-hover:border-secondary/40 transition-all">
                          <MapPin className="text-secondary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1 font-medium">Location</p>
                          <p className="text-foreground font-medium">{contentData.personal.location}</p>
                          <p className="text-sm text-muted-foreground">{contentData.personal.institution}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-8 glass-card glass-card-hover border-secondary/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href={contentData.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-6 glass-card rounded-xl border border-primary/20 hover:border-primary transition-all text-center group"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="mx-auto mb-3 text-foreground group-hover:text-primary transition-colors" size={28} />
                        <p className="text-sm font-medium text-foreground">LinkedIn</p>
                      </motion.a>
                      
                      <motion.a
                        href={contentData.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-6 glass-card rounded-xl border border-primary/20 hover:border-primary transition-all text-center group"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="mx-auto mb-3 text-foreground group-hover:text-primary transition-colors" size={28} />
                        <p className="text-sm font-medium text-foreground">GitHub</p>
                      </motion.a>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 glass-card rounded-2xl border border-accent/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <p className="text-sm text-foreground/80 italic relative z-10 leading-relaxed">
                  <span className="text-accent text-2xl">"</span>
                  Measure, iterate, improve — that's engineering.
                  <span className="text-accent text-2xl">"</span>
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 glass-card border-primary/10 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="glass-card border-primary/20 focus:border-primary hover-glow"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="glass-card border-primary/20 focus:border-primary hover-glow"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="glass-card border-primary/20 focus:border-primary resize-none hover-glow"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background font-semibold py-6 rounded-xl hover-glow transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>

                      <p className="text-xs text-muted-foreground text-center mt-3">
                        This will open your email client with the message pre-filled
                      </p>
                    </motion.div>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}