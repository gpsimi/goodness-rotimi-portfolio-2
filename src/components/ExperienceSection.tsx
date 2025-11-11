import { Link } from "react-router-dom";
import { experiences } from "@/constants/experiences";

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-12 md:py-20 border-y-2">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground animate-fade-in">
                    My Experiences
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {experiences.map((exp, index) => (
                        <Link key={index} to={`/experiences/${exp.slug}`} className="block">
                            <div className="p-6 hover:shadow-lg transition-all cursor-pointer group hover-scale animate-scale-in rounded-lg border border-border h-full hover:border-primary"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                                        {exp.title}
                                    </h3>
                                    <p className="text-muted-foreground">{exp.description}</p>
                                    <p className="text-sm text-primary font-medium pt-2">View experience →</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

        {/* Introduction (slide 1) */ }
        <div>
            <h3 className="text-2xl font-semibold mb-3">Introduction</h3>
            <p className="text-base text-muted-foreground leading-relaxed">Hi, I'm Goodness - a content writer and strategist passionate about helping brands show up clearly and creatively. This portfolio is a collection of tailored samples inspired by Dara AI's mission: clarity first, tools later. I imagined how I could contribute to your brand visibility on LinkedIn and Instagram, from content calendars to sample posts and engagement ideas.</p>
        </div>

        {/* Brand Understanding (slide 2) */ }
        <div>
            <h3 className="text-2xl font-semibold mb-3">Brand understanding</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-2">Before diving into content, I took time to understand what Dara AI stands for, and honestly, I love how simple yet smart the brand feels.</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-2">Dara AI isn't just talking tech for tech's sake - you're speaking to real businesses that want to work smarter, not harder. That's why I believe your “Clarity first, tools later” mantra is genius.</p>
            <p className="text-base text-muted-foreground leading-relaxed">Your audience? Small and mid-sized business owners and team leads who want to scale but don't want to get lost in complex jargon. They want results, not just more information.</p>
            <p className="text-base text-muted-foreground leading-relaxed mt-3">So every post, every caption, and every piece of content I create for Dara AI will speak their language: calm, confident, and clear. Because I know: when you make clarity your priority, trust follows. When trust is present, growth becomes natural.</p>
        </div>

        {/* Sample LinkedIn calendar (slide 3) */ }
        <div>
            <h3 className="text-2xl font-semibold mb-3">Sample LinkedIn calendar (1-week mock)</h3>
            <div className="overflow-x-auto">
                <table className="w-full table-auto text-left border-collapse">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="py-2 pr-4">Date</th>
                            <th className="py-2 pr-4">Topic</th>
                            <th className="py-2 pr-4">Content Type</th>
                            <th className="py-2 pr-4">Caption Snippet</th>
                            <th className="py-2">Visual Idea</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border">
                            <td className="py-3">Mon</td>
                            <td className="py-3">“Why clarity must come before tools”</td>
                            <td className="py-3">Thought post</td>
                            <td className="py-3">“Before you buy the next AI tool, read this.”</td>
                            <td className="py-3">Minimalist carousel</td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="py-3">Wed</td>
                            <td className="py-3">Behind-the-scenes of an audit process</td>
                            <td className="py-3">Photo + caption</td>
                            <td className="py-3">“Ever wondered what happens before we automate?”</td>
                            <td className="py-3">Office sketch/illustration</td>
                        </tr>
                        <tr>
                            <td className="py-3">Fri</td>
                            <td className="py-3">Industry insight</td>
                            <td className="py-3">Text post</td>
                            <td className="py-3">“Top 3 automation mistakes small businesses make.”</td>
                            <td className="py-3">Graphic of mistakes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Sample Captions (slides 4-5) */ }
        <div>
            <h3 className="text-2xl font-semibold mb-3">Sample captions</h3>
            <div className="space-y-4 text-muted-foreground">
                <div>
                    <p className="font-medium">Example 1</p>
                    <p className="mt-2">Post: “3 questions to ask before automating anything in your business”</p>
                    <p className="mt-1 whitespace-pre-line">Caption:
                        1. What task am I really trying to solve?
                        2. Is my workflow already broken?
                        3. Am I clear on what success looks like?

                        At Dara AI, we donft just automate, we audit. Let's fix the foundation before we bring in tools!</p>
                </div>

                <div>
                    <p className="font-medium">Example 2</p>
                    <p className="mt-2">“Do you really need one more tool? Or do you need a clear system that helps you work smarter?”</p>
                    <p className="mt-1">Dara AI isn't about doing more, it's about doing it better. Let's simplify your workflow and help your team move faster with clarity.</p>
                    <p className="mt-1 text-sm">#WorkSmarter #ClarityFirst #DaraAI</p>
                </div>

                <div>
                    <p className="font-medium">Example 3</p>
                    <p className="mt-2">Spending hours every week manually organizing tasks? You're not lazy. You're just stuck in an outdated system.</p>
                    <p className="mt-1">With Dara AI, structure meets simplicity. Because the best productivity hack? A clear head.</p>
                    <p className="mt-1 text-sm">#Productivity #SimplifyWork #AIForTeams</p>
                </div>
            </div>
        </div>

        {/* Strategy Insight (slide 6) */ }
        <div>
            <h3 className="text-2xl font-semibold mb-3">Strategy insight</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-2">I'll start with simplicity. Most people are still trying to figure out how AI fits into their everyday life. So I'd create content that doesn't sound like tech talk, but feels like someone's helping hand.</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-2">I'd use everyday situations to show how Dara AI helps, like drafting a pitch, fixing your CV, or writing a report at midnight when your brain is tired.</p>
            <p className="text-base text-muted-foreground leading-relaxed">Tone of voice: calm, clear, and human — like your smart friend who knows tech but won't make you feel dumb.</p>
            <ul className="list-disc pl-5 mt-3 text-muted-foreground">
                <li>Formats: Carousel posts for tips and quick wins</li>
                <li>Short videos or reels explaining how Dara AI helps real users</li>
                <li>Relatable captions that meet people where they are</li>
            </ul>
            <p className="mt-3 text-muted-foreground">My goal? To make Dara AI feel less like “just another tool” and more like your behind-the-scenes teammate.</p>
        </div>

        {/* Sample Mock Visuals (slide 7) */ }
        <div>
            <h3 className="text-2xl font-semibold mb-3">Sample mock visuals</h3>
            <p className="text-base text-muted-foreground">Design 2 canvas style visuals or carousels matching the content ideas (minimalist, clear, and brand-aligned).</p>
        </div>

        {/* Final slide: Contact */ }
        <div>
            <h3 className="text-2xl font-semibold mb-3">Contact & thanks</h3>
            <p className="text-base text-muted-foreground">Thank you for viewing!</p>
            <p className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/goodness-rotimi-5070962b8" target="_blank" rel="noopener noreferrer" className="text-primary">https://www.linkedin.com/in/goodness-rotimi-5070962b8</a></p>
            <p className="mt-1">Email: <a href="mailto:goodrotimi0@gmail.com" className="text-primary">goodrotimi0@gmail.com</a></p>
            <p className="mt-2 text-muted-foreground">Let's grow with clarity-first content.</p>
            <p className="mt-2 text-muted-foreground">Let's grow with clarity-first content.</p>
        </div>
        
      
    

