
import { ArrowDown, Download, ExternalLink } from "lucide-react";

interface HeroBannerProps {
  name: string;
  subtitle: string;
  buttons: string[];
}

const HeroBanner = ({ name, subtitle, buttons }: HeroBannerProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Lokesh_Krishna_Koyya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          {subtitle}
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          "I build intelligent systems that automate, accelerate, and inspire."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover-lift flex items-center gap-2"
          >
            {buttons[0]}
            <ExternalLink className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover-lift"
          >
            {buttons[1]}
          </button>
          <button
            onClick={downloadResume}
            className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-all duration-300 hover-lift flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            {buttons[2]}
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroBanner;
