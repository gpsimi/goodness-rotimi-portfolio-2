import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/Portfolio";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { works } from "@/constants";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection works={works} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
