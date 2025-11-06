import { Card } from "@/components/ui/card";
import { Pen, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a creative writer with a passion for storytelling that resonates with readers on a deep, emotional level. 
              With over 10 years of experience, I've worked across multiple genres including fiction, creative non-fiction, 
              and digital content.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work has been featured in numerous publications, and I've helped countless clients bring their stories to life 
              through compelling narratives and authentic voice.
            </p>
          </div>
          <Card className="p-8 space-y-4">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Published Works</h3>
                <p className="text-muted-foreground">50+ articles and 3 novels</p>
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

