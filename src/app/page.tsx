import Featuredsection from "@/components/Featuredsection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Samples from "@/components/Samples";
import DrawingSection from "@/components/Drawingsection";
import Structureglazing from "@/components/Structureglazing";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featuredsection />
      <Structureglazing />
      <Highlights />
      <DrawingSection />
      <Samples />
      <Footer />
    </main>
  );
}
