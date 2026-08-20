const services = [
  {
    icon: "🫁",
    title: "Respiratory Conditions",
    desc: "Asthma, chronic cough, sinusitis, allergic rhinitis, frequent colds.",
  },
  {
    icon: "🧴",
    title: "Skin Disorders",
    desc: "Eczema, psoriasis, acne, urticaria, fungal infections, hair fall.",
  },
  {
    icon: "🧠",
    title: "Stress & Mental Health",
    desc: "Anxiety, depression, insomnia, mood disorders, exam stress.",
  },
  {
    icon: "🦴",
    title: "Joint & Bone Pain",
    desc: "Arthritis, back pain, sciatica, gout, frozen shoulder.",
  },
  {
    icon: "🤸",
    title: "Digestive Disorders",
    desc: "IBS, acidity, constipation, gastritis, piles, fatty liver.",
  },
  {
    icon: "👶",
    title: "Paediatric Care",
    desc: "Recurrent infections, tonsillitis, bedwetting, growth issues, ADHD.",
  },
  {
    icon: "👩",
    title: "Women's Health",
    desc: "PCOS, menstrual irregularities, hormonal issues, menopause care.",
  },
  {
    icon: "🩺",
    title: "Chronic & Lifestyle Diseases",
    desc: "Diabetes support, thyroid disorders, hypertension, migraines.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">What We Treat</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Our Specialisations
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Effective homoeopathic treatment for a wide range of conditions —
            safe for all ages, with no harmful side effects.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
