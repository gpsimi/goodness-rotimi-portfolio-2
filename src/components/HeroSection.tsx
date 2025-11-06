import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-writer.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center py-8 md:py-16">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Hello, I'm <br />Goodness Rotimi
            </h1>
            <p className="text-xl font-semibold md:text-2xl text-muted-foreground mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Content Strategist & Writer
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
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

