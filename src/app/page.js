import AboutSection from "@/components/FocusingSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <section className="bg-[url('@/public/Images/bg.svg')] w-full bg-center h-940.5 bg-cover flex-col justify-center overflow-x-hidden">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ProjectSection></ProjectSection>
    </section>
  );
}
