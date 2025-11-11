import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { experiences } from "@/constants/experiences";

const ExperienceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
        <Button onClick={() => navigate("/")} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    );
  }

  const { sections } = experience;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {experience.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {experience.description}
              </p>
            </div>

            {/* Introduction */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold text-foreground">
                Introduction
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {sections.introduction}
              </p>
            </section>

            {/* Brand Understanding */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold text-foreground">
                Brand Understanding
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {sections.brandUnderstanding}
              </p>
            </section>

            {/* LinkedIn Calendar */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold text-foreground">
                Sample LinkedIn Calendar (1-Week Mock)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-sm font-semibold">Date</th>
                      <th className="py-2 pr-4 text-sm font-semibold">Topic</th>
                      <th className="py-2 pr-4 text-sm font-semibold">
                        Content Type
                      </th>
                      <th className="py-2 pr-4 text-sm font-semibold">
                        Caption Snippet
                      </th>
                      <th className="py-2 text-sm font-semibold">
                        Visual Idea
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sections.linkedInCalendar.map((item, idx) => (
                      <tr key={idx} className="border-b border-border">
                        <td className="py-3 text-sm">{item.date}</td>
                        <td className="py-3 text-sm">{item.topic}</td>
                        <td className="py-3 text-sm">{item.contentType}</td>
                        <td className="py-3 text-sm">{item.captionSnippet}</td>
                        <td className="py-3 text-sm">{item.visualIdea}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Sample Captions */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold text-foreground">
                Sample Captions
              </h2>
              <div className="space-y-6">
                {sections.sampleCaptions.map((caption, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-xl font-medium text-foreground">
                      {caption.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      Post: {caption.post}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {caption.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Strategy Insight */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold text-foreground">
                Strategy Insight
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {sections.strategyInsight}
              </p>
            </section>

            {/* Mock Visuals */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold text-foreground">
                Sample Mock Visuals
              </h2>
              <p className="text-base text-muted-foreground">
                {sections.mockVisuals}
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-3 border-t border-border pt-8">
              <h2 className="text-3xl font-semibold text-foreground">
                Contact & Thanks
              </h2>
              <p className="text-base text-muted-foreground">
                Thank you for viewing!
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href={sections.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {sections.contact.linkedin}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${sections.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {sections.contact.email}
                </a>
              </p>
              <p className="text-base text-muted-foreground">
                Let's grow with clarity-first content.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperienceDetail;
