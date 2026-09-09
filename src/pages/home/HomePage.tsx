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
      <HeroSection />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-24 md:pb-32 flex flex-col gap-32">
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
