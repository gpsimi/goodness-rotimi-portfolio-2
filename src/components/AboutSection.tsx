import { Card } from "@/components/ui/card";
import { Pen, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground animate-fade-in">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a creative writer with a passion for storytelling that resonates with readers on a deep, emotional level.
              With a few years of experience, I've worked across multiple genres including fiction, creative non-fiction,
              and digital content.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work has been featured in numerous publications, and I've helped countless clients bring their stories to life
              through compelling narratives and authentic voice.
            </p>
          </div>
          <Card className="p-4 md:p-8 space-y-4 animate-scale-in hover-scale" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Published Works</h3>
                <p className="text-muted-foreground">
                  on {" "}
                  <span className="font-bold">
                    <a href="https://medium.com/@goodrotimi0" target="_blank">
                    Medium  {" "}
                  </a>
                  </span>
                  and  {" "}
                  <span className="font-bold">
                    <a href="https://ohrpub.com/author/goodness/" target="_blank">OHR Publishing</a>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Pen className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Writing Style</h3>
                <p className="text-muted-foreground">Evocative, character-driven narratives</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

