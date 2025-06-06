
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

interface ContactFooterProps {
  email: string;
  linkedin: string;
  github: string;
}

const ContactFooter = ({ email, linkedin, github }: ContactFooterProps) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=Let's connect!`;
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${email}?subject=Let's connect!`,
      action: handleEmailClick
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: linkedin,
      external: true
    },
    {
      icon: Github,
      label: "GitHub",
      href: github,
      external: true
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12">
          "Let's connect and create something extraordinary."
        </p>
        
        <div className="flex justify-center gap-6 mb-16">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={link.action}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover-lift group"
                aria-label={`Contact via ${link.label}`}
              >
                <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>
                <span className="font-medium text-foreground">{link.label}</span>
                {link.external && (
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                )}
              </a>
            );
          })}
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground">
            © 2024 Lokesh Krishna Koyya. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
