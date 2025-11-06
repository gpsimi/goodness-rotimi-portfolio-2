import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Pen, BookOpen, Mail, Github, Linkedin, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-writer.jpg";

interface WorkItem {
  title: string;
  category: string;
  description: string;
  fullContent: string;
}

const Index = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const works: WorkItem[] = [
    {
      title: "The Midnight Garden",
      category: "Fiction",
      description: "A haunting tale of loss, memory, and the spaces between dreams and reality.",
      fullContent: "A haunting tale of loss, memory, and the spaces between dreams and reality. This novel follows Emma as she discovers a mysterious garden that only appears at midnight, where the boundaries between past and present blur. Through lyrical prose and vivid imagery, the story explores themes of grief, healing, and the power of memory to shape our present."
    },
    {
      title: "Echoes of Tomorrow",
      category: "Science Fiction",
      description: "An exploration of humanity's future through the lens of artificial consciousness.",
      fullContent: "An exploration of humanity's future through the lens of artificial consciousness. Set in a near-future world where AI has achieved sentience, this story delves into what it means to be human, the nature of consciousness, and the ethical dilemmas we face as technology evolves. A thought-provoking journey that questions the very essence of existence."
    },
    {
      title: "Letters to My Younger Self",
      category: "Essay Collection",
      description: "Personal reflections on growth, failure, and finding meaning in the everyday.",
      fullContent: "Personal reflections on growth, failure, and finding meaning in the everyday. This collection of intimate essays chronicles a journey of self-discovery, sharing hard-won wisdom about creativity, resilience, and the courage to be vulnerable. Each letter offers a candid look at the lessons learned through life's challenges and triumphs."
    },
    {
      title: "The Silent Witness",
      category: "Mystery",
      description: "A gripping psychological thriller about secrets, lies, and redemption.",
      fullContent: "A gripping psychological thriller about secrets, lies, and redemption. When a small town's darkest secret resurfaces, everyone becomes a suspect. Through expertly crafted suspense and complex character development, this novel keeps readers guessing until the final page, while exploring the weight of guilt and the possibility of forgiveness."
    },
    {
      title: "Digital Natives",
      category: "Non-Fiction",
      description: "An insightful look at how technology shapes modern storytelling.",
      fullContent: "An insightful look at how technology shapes modern storytelling. This comprehensive analysis examines how digital platforms have transformed the way we create, share, and consume stories. From social media narratives to interactive fiction, discover how technology is revolutionizing the ancient art of storytelling."
    },
    {
      title: "Beneath the Surface",
      category: "Short Stories",
      description: "A collection of intimate stories exploring the human condition.",
      fullContent: "A collection of intimate stories exploring the human condition. Each story in this collection peels back the layers of everyday life to reveal the profound emotions and connections that lie beneath. From moments of quiet desperation to unexpected joy, these tales celebrate the complexity and beauty of being human."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">Jane Doe</h2>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#work" className="text-foreground hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Crafting Stories<br />That Matter
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Creative writer specializing in compelling narratives, thought-provoking essays, and captivating fiction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg hover-scale" asChild>
                  <a href="#work">View My Work</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg hover-scale" asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
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

      {/* About Section */}
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

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all cursor-pointer group hover-scale animate-fade-in"
                onClick={() => setSelectedWork(work)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground">{work.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Detail Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
                {selectedWork?.category}
              </span>
            </div>
            <DialogTitle className="text-3xl">{selectedWork?.title}</DialogTitle>
            <DialogDescription className="text-base leading-relaxed pt-4">
              {selectedWork?.fullContent}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new projects and collaborations. Whether you have a story idea or just want to chat about writing, 
            feel free to reach out.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button size="lg" asChild>
              <a href="mailto:jane@example.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
