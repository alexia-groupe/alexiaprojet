import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Alexia France",
  description: "Votre partenaire de confiance dans chaque domaine : Comptabilité, VTC, Multiservices.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-gray-50 selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
