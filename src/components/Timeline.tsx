
import { Calendar, ExternalLink } from "lucide-react";

const Timeline = () => {
  const experience = {
    title: "Software Engineer Intern",
    company: "Algonox Technologies",
    period: "Jul 2024 – Jan 2025",
    achievements: [
      "Built Punch Card Queue system using Excel + ChatGPT API",
      "Designed four-shot prompt Script Generator for frontend automation in Ionic",
      "Streamlined backend workflows and dynamic dropdown features",
      "Developed PDF-to-Excel automation with improved multi-page table parsing"
    ]
  };

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Experience</h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          "End-to-end automation and AI integration at scale."
        </p>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
          
          <div className="relative pl-20 pb-8">
            <div className="absolute left-6 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-accent">{experience.title}</h3>
                  <p className="text-lg font-medium text-foreground">{experience.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
