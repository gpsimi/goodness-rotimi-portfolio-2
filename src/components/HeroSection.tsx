import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-writer.jpg";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Crafting Stories<br />That Matter
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Creative writer specializing in compelling narratives, thought-provoking essays, and captivating fiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <Button size="lg" className="text-lg hover-scale" asChild>
                <a href="#work">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg hover-scale" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <img 
                src={heroImage} 
                alt="Creative writer workspace with typewriter and notebooks" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

