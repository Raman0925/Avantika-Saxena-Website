"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="text-xl">🌿</span>
          <span>Dr. Awantika Saxena</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Why Homoeopathy", href: "#why" },
          ].map((link) => (
            <a key={link.label} href={link.href} className="hover:text-green-600 transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="tel:9399839547"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
