import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

const AboutPage: React.FC = () => {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="container mx-auto px-4 py-12 text-white relative z-20">
        <p className="text-xl mt-8 mx-auto max-w-xl text-center">
          At FitnessWell, we are dedicated to helping you achieve your health and wellness goals. Our mission is to provide top-quality fitness classes, personalized training, and a supportive community to empower you on your journey to a healthier lifestyle.
        </p>
        <p className="text-xl mt-8 mx-auto max-w-xl text-center">
          Whether you are a beginner looking to kickstart your fitness journey or an experienced athlete striving for new heights, our team of expert trainers and coaches are here to guide and motivate you every step of the way.
        </p>
        <p className="text-xl mt-8 mx-auto max-w-xl text-center mb-16">
          Join us today and experience the transformative power of fitness and wellness at FitnessWell.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
