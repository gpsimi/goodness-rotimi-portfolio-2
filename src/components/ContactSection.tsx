import { Button } from "@/components/ui/button";
import { Mail,  Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground animate-fade-in">Let's Connect</h2>
        <p className="text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          I'm always interested in new projects and collaborations. Whether you have a story idea or just want to chat about writing, 
          feel free to reach out.
        </p>
        <div className="flex justify-center gap-4 mb-6 md:mb-8 animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="hover-scale" asChild>
            <a href="mailto:goodrotimi0@gmail.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </Button>
        </div>
        <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a href="https://www.instagram.com/goodness_rotimi?igsh=M256MXZoZzA1cDZv" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/goodness-rotimi-5070962b8" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

