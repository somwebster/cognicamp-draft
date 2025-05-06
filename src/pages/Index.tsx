
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatYoullBuild from "@/components/WhatYoullBuild";
import DailyBreakdown from "@/components/DailyBreakdown";
import Rewards from "@/components/Rewards";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="space-y-0">
        <HeroSection />
        <WhatYoullBuild />
        <DailyBreakdown />
        <Rewards />
        <FAQ />
        <Gallery />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
