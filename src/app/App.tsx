import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { ExperienceSection } from './components/experience-section';
import { ResearchSection } from './components/research-section';
import { ProjectsSection } from './components/projects-section';
import { PublicationsSection } from './components/publications-section';
import { TeachingSection } from './components/teaching-section';
import { SkillsSection } from './components/skills-section';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scroll-to-top';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Raj Maheshwari | ML/NLP Engineer';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main id="main-content" className="overflow-x-hidden">
        <HeroSection />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection />
        <PublicationsSection />
        <TeachingSection />
        <SkillsSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;