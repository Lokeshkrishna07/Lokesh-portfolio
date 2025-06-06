
import { Award, Star, Trophy, Zap } from "lucide-react";

const AchievementList = () => {
  const achievements = [
    {
      title: "Qualified PolyCET 2019",
      description: "Rank 3400",
      icon: Trophy
    },
    {
      title: "APRJC 2019",
      description: "Rank 410",
      icon: Star
    },
    {
      title: "Amazon Voucher Winner",
      description: "₹5000 for building ChatGPT Script Generator",
      icon: Award
    },
    {
      title: "HackerRank Certified",
      description: "Python & SQL certifications",
      icon: Zap
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Achievements</h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          "Driven by growth, certified by action."
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementList;
