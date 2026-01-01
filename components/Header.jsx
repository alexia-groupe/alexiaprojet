"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Comptabilité", href: "/compta" },
    { name: "VTC", href: "/vtc" },
    { name: "Multiservices", href: "/multiservices" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all">
            <Image
              src="/logo.png"
              alt="Logo Alexia Groupe"
              fill
              className="object-cover"
            />
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-white"
            }`}>
            Alexia <span className="text-accent">France</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Button href="https://wa.me/33652755294" variant={isScrolled ? "primary" : "primary"} className="px-5 py-2 text-sm">
            Contactez-nous
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 font-medium py-2 border-b border-gray-50 hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
          <Button href="https://wa.me/33652755294" variant="primary" className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            Contactez-nous
          </Button>
        </div>
      )}
    </header>
  );
}
