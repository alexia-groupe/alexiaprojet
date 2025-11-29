"use client";
import Image from "next/image";

export default function Multiservices() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-4 bg-or shadow-md fixed w-full top-0 z-50">
        <div className="flex items-center space-x-3">
          <Image src="/alexia-groupe.png" alt="Logo Alexia Groupe" width={150} height={150} />
          <h1 className="text-2xl font-bold text-blue-700">Alexia Multiservices</h1>
        </div>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">Accueil</a>
          <a href="/compta" className="hover:text-blue-600">Alexia Compta</a>
          <a href="/vtc" className="hover:text-blue-600">Alexia VTC</a>
        </nav>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="flex flex-col items-center justify-center text-center flex-grow pt-28 px-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">Votre Partenaire Travaux & Services</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Alexia Multiservices propose des solutions sur mesure pour vos besoins en électricité, plomberie, climatisation, sécurité et entretien.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl">
          <Image src="/multi.jpg" alt="Travaux multiservices" width={290} height={200} className="rounded-lg shadow" />
          <Image src="/multi2.jpg" alt="Plomberie et électricité" width={900} height={200} className="rounded-lg shadow" />
          <Image src="/multi3.jpg" alt="Équipe technique" width={290} height={250} className="rounded-lg shadow" />
        </div>

        <section className="mt-12 bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Nos Prestations</h3>
          <ul className="text-gray-700 space-y-2 text-left">
            <li>🔌 Électricité – installation, dépannage et mise aux normes</li>
            <li>🚰 Plomberie – entretien, réparation et rénovation</li>
            <li>❄️ Climatisation/Chauffage – pose et maintenance</li>
            <li>🔒 Sécurité – alarmes, caméra, vidéosurveillance et contrôle d’accès</li>
            <li>🏭 Contrat d'entretien et de maintenance</li>
          </ul>
        </section>

        <a
          href="mailto:alexiaentreprise@gmail.com"
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          📞Demander une intervention 
        </a>
      </main>

{/* AVIS CLIENTS */}
<section className="mt-16 w-full max-w-6xl mx-auto px-6">
  <h3 className="text-3xl font-bold text-center mb-8 text-blue-700">
    ⭐ Avis de nos clients – Alexia Multiservices
  </h3>

  <div className="grid md:grid-cols-3 gap-6">

    {/* AVIS 1 */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center mb-3">
        <Image src="/client9.png" alt="Client" width={50} height={50} className="rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">Sarah L.</p>
          <p className="text-yellow-500">★★★★★</p>
        </div>
      </div>
      <p className="text-gray-600">
        Intervention rapide et travail soigné. Mon installation électrique est comme neuve.
      </p>
    </div>

    {/* AVIS 2 */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center mb-3">
        <Image src="/client8.png" alt="Client" width={50} height={50} className="rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">Louis R.</p>
          <p className="text-yellow-500">★★★★★</p>
        </div>
      </div>
      <p className="text-gray-600">
        Très bon service pour la climatisation. Professionnels et efficaces.
      </p>
    </div>

    {/* AVIS 3 */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center mb-3">
        <Image src="/client7.png" alt="Client" width={50} height={50} className="rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">Patrick M.</p>
          <p className="text-yellow-500">★★★★★</p>
        </div>
      </div>
      <p className="text-gray-600">
        Travail impeccable. Plomberie réparée en moins d’une heure. Merci !
      </p>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">📞 06 52 75 52 94</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com/" target="_blank"><Image src="/facebook.png" alt="Facebook" width={28} height={28} /></a>
            <a href="https://linkedin.com/company/alexiagroupe" target="_blank"><Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} /></a>
            <a href="https://instagram.com/alexiagroupe" target="_blank"><Image src="/instagram.png" alt="Instagram" width={28} height={28} /></a>
          </div>
          <p className="text-gray-400 text-sm mt-4">© 2025 Alexia Multiservices - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}
