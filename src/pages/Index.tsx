import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { WorkItem } from "@/types/work";

const Index = () => {
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
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection works={works} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
