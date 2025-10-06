import { Toaster } from 'sonner@2.0.3';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Publications />
      <Certifications />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}