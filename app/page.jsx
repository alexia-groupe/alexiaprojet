"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-4 bg-gray shadow-md fixed w-full top-0 z-150">
        <div className="flex items-center space-x-3">
          <Image src="/alexia-groupe.png" alt="Logo Alexia Groupe" width={200} height={200} />
          <h1 className="text-2xl font-bold text-blue-700"></h1>
        </div>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#accueil" className="hover:text-blue-600">Accueil</a>
          <a href="/compta" className="hover:text-blue-600">Alexia Compta</a>
          <a href="/vtc" className="hover:text-blue-600">Alexia VTC</a>
          <a href="/multiservices" className="hover:text-blue-600">Alexia Multiservices</a>
        </nav>
      </header>

      {/* SECTION PRINCIPALE */}
      <main className="flex flex-col items-center justify-center text-center flex-grow pt-28 px-6">
        <h2 className="text-4xl font-bold mb-2">Alexia Groupe</h2>
        <p className="text-xl text-gray-600 mb-6">
          Votre partenaire de confiance dans chaque domaine
        </p>
        <a
          href="tel:0652755294"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          📞 +33 6 52 75 52 94
        </a>

        {/* FILIALES */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
          {/* COMPTA */}
          <div id="compta" className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
            <Image src="/compta.jpg" alt="Alexia Compta" width={300} height={200} className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">Alexia Compta</h3>
            <p className="text-gray-600 mb-4 text-center">
              Expertise en comptabilité, gestion financière et fiscalité.
            </p>
            <a href="mailto:alexiaentreprise@gmail.com" className="text-blue-600 font-medium hover:underline">
              Contactez-nous
            </a>
          </div>

          {/* VTC */}
          <div id="vtc" className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
            <Image src="/vtc.jpg" alt="Alexia VTC" width={800} height={350} className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">Alexia VTC</h3>
            <p className="text-gray-600 mb-4 text-center">
              Services de transport de personnes avec chauffeur professionnel.
            </p>
            <a href="mailto:alexiaentreprise@gmail.com" className="text-blue-600 font-medium hover:underline">
              Contactez-nous
            </a>
          </div>

          {/* MULTISERVICES */}
          <div id="multi" className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
            <Image src="/multi4.jpg" alt="Alexia Multiservices" width={265} height={150} className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">Alexia Multiservices</h3>
            <p className="text-gray-600 mb-4 text-center">
              Solutions en électricité, plomberie, climatisation, sécurité, etc.
            </p>
            <a href="mailto:alexiaentreprise@gmail.com" className="text-blue-600 font-medium hover:underline">
              Contactez-nous
            </a>
          </div>
        </div>
      </main>
      {/* SECTION ALEXIA GROUPE - STYLE LS COMPTA */}
<section className="w-full bg-black-100 py-16 px-6 mt-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

    {/* Colonne 1 : À propos */}
    <div>
      <h3 className="text-xl font-bold text-blue-700 mb-4">À propos</h3>
      <p className="text-gray-700 font-semibold">Alexia Groupe</p>
      <p className="text-gray-600">12 allée de la Madeleine</p>
      <p className="text-gray-600">92220 BAGNEUX</p>
    </div>

    {/* Colonne 2 : Contact */}
    <div>
      <h3 className="text-xl font-bold text-blue-700 mb-4">Contact</h3>
      <p className="text-gray-700 font-semibold">Contactez-nous</p>
      <p className="text-gray-600">06 52 75 52 94</p>
      <p className="text-gray-600">contact@alexiagroupe.fr</p>
      <p className="text-gray-600">Du mardi au samedi de 9h à 19h</p>
    </div>
    {/* Colonne 3 : Texte*/}
    <div>
      <h3 className="text-xl font-bold text-blue-700 mb-4">Nos services +</h3>
      <p className="text-gray-600">Création d'entreprise</p>
      <p className="text-gray-600">Contrats de travail</p>
      <p className="text-gray-600">Services administratifs</p>
      <p className="text-gray-600">Conseils juridique</p>
    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">📞 06 52 75 52 94</p>
          <p className="mb-2">
            🌐 <a href="https://alexiagroupe.fr" className="text-blue-400 hover:underline">alexiagroupe.fr</a>
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.png" alt="Facebook" width={28} height={28} />
            </a>
            <a href="https://linkedin.com/company/alexiagroupe" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
            </a>
            <a href="https://instagram.com/alexiagroupe" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={28} height={28} />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">© 2025 Alexia Groupe - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}