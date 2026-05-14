import { Navbar } from '@widgets/navbar';
import { HeroSection } from '@widgets/hero';
import { ProjectsSection } from '@widgets/projects';
import { SkillsSection } from '@widgets/skills';
import { ExperienceSection } from '@widgets/experience';
import { ContactSection } from '@widgets/contact';
import { Footer } from '@widgets/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
