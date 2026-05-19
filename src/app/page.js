import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <section className="bg-[url('@/public/Images/bg.svg')] w-full h-940.5 flex justify-center items-center">
      <HeroSection></HeroSection>
    </section>
  );
}
