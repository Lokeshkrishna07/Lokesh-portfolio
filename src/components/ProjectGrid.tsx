
import { ExternalLink, Github } from "lucide-react";

const ProjectGrid = () => {
  const projects = [
    {
      title: "Real-Time Accident Detection System",
      tech: ["YOLOv8", "Django", "PyTorch"],
      summary: "Real-time camera feed → accident detection → license plate extraction → emergency alert system.",
      featured: true
    },
    {
      title: "Knowledge Graph Embeddings",
      tech: ["Python", "NetworkX", "word2vec"],
      summary: "Temporal graph embeddings using triplets and subgraph localization for contextual inference.",
      featured: true
    },
    {
      title: "Neobi Punch Card Integration",
      tech: ["Flask", "ChatGPT API"],
      summary: "Excel-to-JSON field mapping with rule-based script generation via ChatGPT prompts.",
      featured: false
    },
    {
      title: "Dynamic Script Generator for Ionic",
      tech: ["Python", "Flask"],
      summary: "Four-shot prompt system to create frontend automation scripts dynamically.",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          "Blending deep tech with practical use cases to automate intelligence."
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover-lift ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {project.title}
                </h3>
                <div className="flex gap-2 ml-4">
                  <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                    <Github className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.summary}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm font-medium border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
