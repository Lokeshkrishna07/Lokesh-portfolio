
import ThemeToggle from "@/components/ThemeToggle";
import HeroBanner from "@/components/HeroBanner";
import ProfileCard from "@/components/ProfileCard";
import Timeline from "@/components/Timeline";
import ProjectGrid from "@/components/ProjectGrid";
import SkillTags from "@/components/SkillTags";
import AchievementList from "@/components/AchievementList";
import FunFactBlock from "@/components/FunFactBlock";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      <HeroBanner
        name="Lokesh Krishna Koyya"
        subtitle="Software Engineer | CSE @ IIIT Nuzvid"
        buttons={["Explore Projects", "Get in Touch", "Download Resume"]}
      />
      
      <ProfileCard
        education="B.Tech in Computer Science, IIIT Nuzvid (2021–2025), CGPA: 8.5"
        summary="I specialize in real-world problem-solving with AI, automation, and intelligent tooling. From data pipelines to backend APIs, I build for scale and reliability."
      />
      
      <Timeline />
      
      <ProjectGrid />
      
      <SkillTags />
      
      <AchievementList />
      
      <FunFactBlock />
      
      <ContactFooter
        email="lokeshkrishnakoyya@gmail.com"
        linkedin="https://linkedin.com/in/lokesh-krishna-koyya-75806b252/"
        github="https://github.com/Lokeshkrishna07"
      />
    </div>
  );
};

export default Index;
