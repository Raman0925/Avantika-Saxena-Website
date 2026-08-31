"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-green-600 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-white">
          <Image src="/og-image.jpg" alt="Dr. Awantika Saxena" width={40} height={40} className="rounded-full" />
          <span>Dr. Awantika Saxena</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white">
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
            className="bg-white hover:bg-green-50 text-green-700 px-5 py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
