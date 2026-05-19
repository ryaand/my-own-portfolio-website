import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Background from "@/components/Utilities/background";

export default function Home() {
  return (
    <section className="bg-[url('@/public/Images/bg.svg')] w-full bg-center h-940.5 bg-cover flex-col justify-center overflow-x-hidden">
      {/* bg-[url('@/public/Images/bg.svg')] */}

      <HeroSection></HeroSection>

    </section>
  );
}
