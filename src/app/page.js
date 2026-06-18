import AboutSection from "@/components/FocusingSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ToolsAndLang from "@/components/ToolsAnfLangSection";

export default function Home() {
  return (
    <section className="w-full bg-center bg-cover flex-col justify-center">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SpecialtiesSection></SpecialtiesSection>
      <ToolsAndLang></ToolsAndLang>
      <ProjectSection></ProjectSection>
    </section>
  );
}
