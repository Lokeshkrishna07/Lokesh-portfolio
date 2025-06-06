
const SkillTags = () => {
  const skillCategories = {
    "Languages": ["Python", "C", "Java", "SQL", "JavaScript", "HTML/CSS"],
    "Frameworks/Tools": ["Flask", "Git", "Docker", "Postman", "VS Code"],
    "Libraries": ["Pandas", "NumPy", "PyTorch", "YOLOv8", "NetworkX"],
    "Databases": ["MySQL"],
    "Soft Skills": ["Leadership", "Communication", "Problem Solving"]
  };

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Skills & Technologies</h2>
        
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="text-center">
              <h3 className="text-xl font-semibold text-accent mb-6">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card text-foreground rounded-lg border border-border hover:border-accent transition-colors duration-300 hover-lift"
                  >
                    {skill}
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

export default SkillTags;
