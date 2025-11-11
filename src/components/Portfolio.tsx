import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { WorkItem } from "@/types/work";

interface WorkSectionProps {
  works: WorkItem[];
}

const Portfolio = ({ works }: WorkSectionProps) => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  return (
    <>
      <section id="work" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground animate-fade-in">My Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {works.map((work, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 hover:shadow-lg transition-all cursor-pointer group hover-scale animate-scale-in"
                onClick={() => setSelectedWork(work)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full transition-transform duration-200 group-hover:scale-105">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground">{work.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Portfolio;

