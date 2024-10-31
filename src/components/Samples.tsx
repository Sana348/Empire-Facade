"use client"; 
import { WavyBackground } from "./ui/wavy-background";
import Image from "next/image";
import React from "react";

const samples = [
  { id: 1, name: "Anodised Color", image: "/images/samples/sample (1).jpg" },
  { id: 2, name: "Glass Railing sample", image: "/images/samples/sample (2).jpg" },
  { id: 3, name: "Glazing Techniques", image: "/images/samples/sample (3).jpg" },
  { id: 4, name: "Lower Sample", image: "/images/samples/sample (4).jpg" },
  { id: 5, name: "Acp Glass Sample", image: "/images/samples/sample (5).jpg" },
];

function Samples() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          See Our Samples
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your journey
        </p>
        <div className="flex flex-wrap items-center justify-center mb-10 w-full gap-6">
          {samples.map((sample) => (
            <div key={sample.id} className="flex flex-col items-center">
              <div className="relative w-40 h-40"> {/* Increased size for larger circles */}
                <Image
                  src={sample.image}
                  alt={sample.name}
                  fill // Replaces layout="fill" with fill
                  className="rounded-full object-cover" // Ensures circular appearance
                />
              </div>
              <p className="text-white text-center mt-2 font-semibold">{sample.name}</p>
            </div>
          ))}
        </div>
      </WavyBackground>
    </div>
  );
}

export default Samples;
