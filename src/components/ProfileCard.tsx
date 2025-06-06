
interface ProfileCardProps {
  education: string;
  summary: string;
}

const ProfileCard = ({ education, summary }: ProfileCardProps) => {
  const softSkills = ["Leadership", "Communication", "Adaptability", "Time Management"];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-64 h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border">
              <img 
                src="/lovable-uploads/0ded2b67-a385-4ee4-9ae6-dc870678a291.png" 
                alt="Lokesh Krishna Koyya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Education</h3>
              <p className="text-muted-foreground leading-relaxed">{education}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Summary</h3>
              <p className="text-muted-foreground leading-relaxed">{summary}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Core Strengths</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
