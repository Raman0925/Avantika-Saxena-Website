#!/usr/bin/env python3
"""
Homeopathy Website Customizer
Usage: python customize.py
Reads your details interactively and outputs a ready-to-use index.html
"""

import re
import shutil
from pathlib import Path

PLACEHOLDERS = {
    "DOCTOR_NAME":       ("Doctor's full name (without 'Dr.' prefix)", "Ramesh Kumar"),
    "QUALIFICATION":     ("Qualifications (e.g. BHMS, MD (Hom))", "BHMS, MD (Hom)"),
    "CITY":              ("City", "New Delhi"),
    "STATE":             ("State", "Delhi"),
    "PHONE":             ("Phone number (display format, e.g. +91 98765 43210)", "+91 98765 43210"),
    "PHONE_RAW":         ("Phone number (digits only for tel: links, e.g. 919876543210)", "919876543210"),
    "WHATSAPP":          ("WhatsApp number (display format, e.g. +91 98765 43210)", "+91 98765 43210"),
    "WHATSAPP_RAW":      ("WhatsApp number (digits only for wa.me links, e.g. 919876543210)", "919876543210"),
    "EMAIL":             ("Email address", "dr.example@gmail.com"),
    "ADDRESS":           ("Clinic address (street/building)", "123 Green Lane, Near City Hospital"),
    "YEARS_EXP":         ("Years of experience (number only)", "10"),
    "PATIENTS_TREATED":  ("Approximate patients treated (number only, e.g. 5000)", "5000"),
    "MON_SAT_HOURS":     ("Monday–Saturday hours (e.g. 9:00 AM – 1:00 PM & 5:00 PM – 8:00 PM)", "9:00 AM – 1:00 PM & 5:00 PM – 8:00 PM"),
    "SUNDAY_HOURS":      ("Sunday hours (e.g. 10:00 AM – 12:00 PM or Closed)", "10:00 AM – 12:00 PM"),
}


def prompt(key, description, default):
    value = input(f"  {description}\n  [{default}]: ").strip()
    return value if value else default


def main():
    source = Path(__file__).parent / "index.html"
    if not source.exists():
        print("Error: index.html not found in the same directory.")
        return

    print("\n" + "="*60)
    print("  Homeopathy Website Customizer")
    print("  Fill in your details (press Enter to keep default)")
    print("="*60 + "\n")

    values = {}
    for key, (description, default) in PLACEHOLDERS.items():
        print(f"\n• {key}")
        values[key] = prompt(key, description, default)

    html = source.read_text(encoding="utf-8")
    for key, value in values.items():
        html = html.replace("{{" + key + "}}", value)

    # Check for any remaining unreplaced placeholders
    remaining = re.findall(r"\{\{[A-Z_]+\}\}", html)
    if remaining:
        print(f"\n⚠  Unreplaced placeholders: {', '.join(set(remaining))}")

    output = Path(__file__).parent / "index_customized.html"
    output.write_text(html, encoding="utf-8")

    print("\n" + "="*60)
    print(f"  ✓ Customized site saved to: {output.name}")
    print("  Open it in your browser to preview.")
    print("  Upload to your web host or GitHub Pages to go live.")
    print("="*60 + "\n")


if __name__ == "__main__":
    main()
