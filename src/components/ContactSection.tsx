import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;

