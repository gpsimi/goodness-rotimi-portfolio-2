import { Link } from "react-router-dom";
import { WorkItem } from "@/types/work";

interface WorkSectionProps {
  works: WorkItem[];
}

const WorkSection = ({ works }: WorkSectionProps) => {
  return (
    <section id="work" className="py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground animate-fade-in">My Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {works.map((work, index) => (
            <Link
              key={index}
              to={`/portfolio/${index}`}
              className="block"
            >
              <div className="p-4 md:p-6 hover:shadow-lg transition-all cursor-pointer group hover-scale animate-scale-in rounded-lg border border-border h-full hover:border-primary"
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
                  <p className="text-sm text-primary font-medium pt-2">Read article →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

