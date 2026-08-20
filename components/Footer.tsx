export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🌿</span>
          <div>
            <div className="text-white font-semibold">Dr. Avantika Saxena</div>
            <div className="text-sm">Homoeopathic Physician · Suncity, Rohtak</div>
          </div>
        </div>
        <nav className="flex gap-6 text-sm">
          {["About", "Services", "Why Homoeopathy", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="text-sm">
          © {new Date().getFullYear()} Dr. Avantika Saxena. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
