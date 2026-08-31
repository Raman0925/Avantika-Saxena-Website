export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">About the Doctor</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
              Compassionate Care,<br />
              <span className="text-green-600">Natural Healing</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Dr. Awantika Saxena is a dedicated homoeopathic physician practising
              from her home clinic in Suncity, Rohtak. With a patient-first
              approach, she offers gentle yet effective homoeopathic treatment for
              a wide range of acute and chronic conditions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Homoeopathy treats the whole person — not just the symptoms. Every
              consultation is thorough and personalised, ensuring the right remedy
              for your unique constitution and health history.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "500+", label: "Patients Treated" },
                { number: "100%", label: "Natural Medicines" },
                { number: "No", label: "Side Effects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-10 text-center">
              <div className="text-8xl mb-6">🌿</div>
              <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                &ldquo;Homoeopathy is the only system of medicine which does not
                suppress the body&apos;s natural healing ability — it works
                with it.&rdquo;
              </blockquote>
              <div className="mt-6 font-semibold text-green-700">— Dr. Awantika Saxena</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
