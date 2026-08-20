import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Avantika Saxena | Homoeopathic Physician, Rohtak",
  description:
    "Personalised homoeopathic treatment for chronic and acute conditions. Home clinic at Suncity, Rohtak. Call +91 9999999999.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
