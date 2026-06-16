import AboutSection from "@/components/FocusingSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ToolsAndLang from "@/components/ToolsAnfLangSection";

export default function Home() {
  return (
    <section className="bg-[url('@/public/Images/bg.svg')] w-full bg-center h-940.5 bg-cover flex-col justify-center overflow-x-hidden">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ProjectSection></ProjectSection>
      <SpecialtiesSection></SpecialtiesSection>
      <ToolsAndLang></ToolsAndLang>
    </section>
  );
}
