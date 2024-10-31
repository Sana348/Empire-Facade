import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 relative z-10 w-full text-center">
        <h2 className="mt-20 md:mt-0 text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 tracking-wide drop-shadow-lg">
           Empire Facade
        </h2>
        <p className="mt-4 text-xl md:text-2xl font-medium text-neutral-500 max-w-2xl mx-auto">
          Welcome to Empire Facade – where innovation meets precision in aluminum fabrication.
        </p>
        <p className="mt-2 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Based in the heart of Delhi, our expertise spans from front elevations and skylights to modular kitchens and custom windows. We are committed to quality, ensuring each project combines design, functionality, and durability.
        </p>
        <p className="mt-2 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Join us to experience exceptional craftsmanship that transforms your vision into architectural reality.
        </p>
        <div className="mt-6">
          <Link href="/portfolio">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Thank you for visiting
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
