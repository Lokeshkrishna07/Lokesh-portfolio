
const FunFactBlock = () => {
  const funFacts = [
    { emoji: "🧠", text: "Loves debugging at night" },
    { emoji: "📸", text: "Enjoys snapping candid moments" },
    { emoji: "🏏", text: "Follows cricket religiously" },
    { emoji: "🥭", text: "Mangoes > Everything" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Fun Facts</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300 hover-lift text-center"
            >
              <div className="text-3xl mb-3">{fact.emoji}</div>
              <p className="text-sm text-muted-foreground">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactBlock;
