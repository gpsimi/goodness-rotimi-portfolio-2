export interface Experience {
  slug: string;
  title: string;
  description: string;
  fullContent: string;
  sections: {
    introduction: string;
    brandUnderstanding: string;
    linkedInCalendar: {
      date: string;
      topic: string;
      contentType: string;
      captionSnippet: string;
      visualIdea: string;
    }[];
    sampleCaptions: {
      title: string;
      post: string;
      caption: string;
    }[];
    strategyInsight: string;
    mockVisuals: string;
    contact: {
      linkedin: string;
      email: string;
    };
  };
}

export const experiences: Experience[] = [
  {
    slug: "dara-ai",
    title: "Goodness Rotimi | Content Strategist & Writer — Portfolio for Dara AI",
    description: "A comprehensive content strategy portfolio showcasing tailored samples and engagement ideas for Dara AI's clarity-first approach.",
    fullContent: "A collection of tailored samples inspired by Dara AI's mission: clarity first, tools later.",
    sections: {
      introduction:
        "Hi, I'm Goodness - a content writer and strategist passionate about helping brands show up clearly and creatively. This portfolio is a collection of tailored samples inspired by Dara AI's mission: clarity first, tools later. I imagined how I could contribute to your brand visibility on LinkedIn and Instagram, from content calendars to sample posts and engagement ideas.",
      brandUnderstanding:
        "Before diving into content, I took time to understand what Dara AI stands for, and honestly, I love how simple yet smart the brand feels.\n\nDara AI isn't just talking tech for tech's sake - you're speaking to real businesses that want to work smarter, not harder. That's why I believe your \"Clarity first, tools later\" mantra is genius.\n\nYour audience? Small and mid-sized business owners and team leads who want to scale but don't want to get lost in complex jargon. They want results, not just more information.\n\nSo every post, every caption, and every piece of content I create for Dara AI will speak their language: calm, confident, and clear. Because I know: when you make clarity your priority, trust follows. When trust is present, growth becomes natural.",
      linkedInCalendar: [
        {
          date: "Mon",
          topic: '"Why clarity must come before tools"',
          contentType: "Thought post",
          captionSnippet: '"Before you buy the next AI tool, read this."',
          visualIdea: "Minimalist carousel",
        },
        {
          date: "Wed",
          topic: "Behind-the-scenes of an audit process",
          contentType: "Photo + caption",
          captionSnippet: '"Ever wondered what happens before we automate?"',
          visualIdea: "Office sketch/illustration",
        },
        {
          date: "Fri",
          topic: "Industry insight",
          contentType: "Text post",
          captionSnippet: '"Top 3 automation mistakes small businesses make."',
          visualIdea: "Graphic of mistakes",
        },
      ],
      sampleCaptions: [
        {
          title: "Example 1",
          post: '"3 questions to ask before automating anything in your business"',
          caption:
            "1. What task am I really trying to solve?\n2. Is my workflow already broken?\n3. Am I clear on what success looks like?\n\nAt Dara AI, we don't just automate, we audit. Let's fix the foundation before we bring in tools!",
        },
        {
          title: "Example 2",
          post: '"Do you really need one more tool? Or do you need a clear system that helps you work smarter?"',
          caption:
            "Dara AI isn't about doing more, it's about doing it better. Let's simplify your workflow and help your team move faster with clarity.\n\n#WorkSmarter #ClarityFirst #DaraAI",
        },
        {
          title: "Example 3",
          post: "Spending hours every week manually organizing tasks?",
          caption:
            "You're not lazy. You're just stuck in an outdated system.\n\nWith Dara AI, structure meets simplicity. Because the best productivity hack? A clear head.\n\n#Productivity #SimplifyWork #AIForTeams",
        },
      ],
      strategyInsight:
        "I'll start with simplicity. Most people are still trying to figure out how AI fits into their everyday life. So I'd create content that doesn't sound like tech talk, but feels like someone's helping hand.\n\nI'd use everyday situations to show how Dara AI helps, like drafting a pitch, fixing your CV, or writing a report at midnight when your brain is tired.\n\nTone of voice: calm, clear, and human — like your smart friend who knows tech but won't make you feel dumb.\n\nFormats:\n→ Carousel posts for tips and quick wins\n→ Short videos or reels explaining how Dara AI helps real users\n→ Relatable captions that meet people where they are\n\nMy goal? To make Dara AI feel less like \"just another tool\" and more like your behind-the-scenes teammate.",
      mockVisuals:
        "Design 2 canvas style visuals or carousels matching the content ideas (minimalist, clear, and brand-aligned).",
      contact: {
        linkedin: "https://www.linkedin.com/in/goodness-rotimi-5070962b8",
        email: "goodrotimi0@gmail.com",
      },
    },
  },
];
