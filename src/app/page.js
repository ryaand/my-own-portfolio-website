import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <section className="bg-[url('@/public/Images/bg.svg')] w-full bg-center h-940.5 flex-col justify-center overflow-x-hidden">
      <HeroSection></HeroSection>
    </section>
  );
}
