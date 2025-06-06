
import { Quote } from "lucide-react";

const TestimonialCard = () => {
  const testimonials = [
    {
      quote: "Lokesh is one of the most driven interns I've mentored. He adapts fast, owns his work, and delivers ahead of time.",
      author: "Senior Developer",
      company: "Algonox"
    },
    {
      quote: "He has a natural flair for AI and backend systems. I expect great things from him.",
      author: "Professor",
      company: "IIIT Nuzvid"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What People Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-md transition-all duration-300 hover-lift"
            >
              <Quote className="h-8 w-8 text-accent mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
