import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/og-image.jpg" alt="Dr. Awantika Saxena" width={40} height={40} className="rounded-full" />
          <div>
            <div className="text-white font-semibold">Dr. Awantika Saxena</div>
            <div className="text-sm">Homoeopathic Physician · Suncity, Rohtak</div>
          </div>
        </div>
        <nav className="flex gap-6 text-sm">
          {[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Why Homoeopathy", href: "#why" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm">
          © {new Date().getFullYear()} Dr. Awantika Saxena. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
