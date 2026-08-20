const points = [
  {
    icon: "🌱",
    title: "100% Natural",
    desc: "All medicines are derived from natural sources — plant, mineral, and animal. No synthetic chemicals.",
  },
  {
    icon: "🛡️",
    title: "No Side Effects",
    desc: "Gentle remedies work with your body, not against it. Safe for infants, pregnant women, and the elderly.",
  },
  {
    icon: "🎯",
    title: "Treats Root Cause",
    desc: "Homoeopathy doesn't just suppress symptoms — it targets the underlying cause for lasting results.",
  },
  {
    icon: "👤",
    title: "Personalised Treatment",
    desc: "Every patient is unique. Remedies are selected based on your complete physical and emotional profile.",
  },
  {
    icon: "💰",
    title: "Affordable Care",
    desc: "Homoeopathic medicines are highly affordable compared to conventional treatments.",
  },
  {
    icon: "🤝",
    title: "Complementary Medicine",
    desc: "Can be taken alongside conventional medicines — a great complement to ongoing treatments.",
  },
];

export default function WhyHomeopathy() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Why Homoeopathy?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A time-tested system of medicine practised worldwide for over 200 years.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4">
              <div className="text-3xl flex-shrink-0">{p.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
