export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Accepting Consultations
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-green-600 mb-6 leading-tight">
          Dr. Awantika
          <span className="block">Saxena</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
          Homoeopathic Physician &amp; Consultant
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Healing with nature&apos;s wisdom. Personalised homoeopathic care for
          chronic and acute conditions — from the comfort of your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking-form"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-green-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book Consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-lg font-semibold px-8 py-4 rounded-2xl border border-gray-200 transition-colors"
          >
            View Services
          </a>
        </div>
        <p className="mt-8 text-gray-400 text-sm">📍 Suncity, Rohtak &nbsp;·&nbsp; Home Clinic</p>
      </div>
    </section>
  );
}
