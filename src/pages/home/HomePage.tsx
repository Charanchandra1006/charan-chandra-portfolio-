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
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-24 md:py-32 flex flex-col gap-32">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
