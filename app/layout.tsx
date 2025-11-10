import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexia Groupe",
  description: "Votre partenaire de confiance dans chaque domaine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
