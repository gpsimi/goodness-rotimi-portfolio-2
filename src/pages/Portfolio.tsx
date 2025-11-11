import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { works } from "@/constants";

const Portfolio = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const workIndex = parseInt(id || "0", 10);
  const article = works[workIndex];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button onClick={() => navigate("/")} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <article className="space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {article.title}
            </h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {article.fullContent}
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <a
              href={article.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              Read full article on Medium →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;
