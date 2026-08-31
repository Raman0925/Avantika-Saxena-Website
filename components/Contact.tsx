export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-green-600 to-teal-700 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-200 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              Book Your Consultation
            </h2>
            <p className="text-green-100 text-lg leading-relaxed mb-10">
              Ready to start your healing journey? Call or WhatsApp us to book
              an appointment. We offer in-person consultations at our home clinic
              in Suncity, Rohtak.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <div className="text-green-200 text-sm">Call / WhatsApp</div>
                  <a href="tel:9399839547" className="text-2xl font-bold hover:text-green-200 transition-colors">
                    +91 93998 39547
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-green-200 text-sm">Location</div>
                  <div className="text-xl font-semibold">Suncity, Rohtak, Haryana</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <div className="text-green-200 text-sm">Clinic Hours</div>
                  <div className="text-xl font-semibold">Mon – Sat &nbsp;|&nbsp; 4:00 PM – 8:00 PM</div>
                  <div className="text-base font-medium mt-1 text-green-200">Sunday &nbsp;|&nbsp; 10:00 AM – 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-green-200 text-sm mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-green-200 text-sm mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-green-200 text-sm mb-1">Your Concern</label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your health concern..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors resize-none"
                />
              </div>
              <a
                href="tel:9399839547"
                className="block w-full bg-white text-green-700 font-bold text-center py-4 rounded-xl hover:bg-green-50 transition-colors"
              >
                📞 Call to Confirm Appointment
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
