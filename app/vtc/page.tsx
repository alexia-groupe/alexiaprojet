"use client";
import Image from "next/image";
import Link from "next/link";

export default function VTC() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-150">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-4 bg-blue shadow-md fixed w-full top-0 z-100">
        <div className="flex items-center space-x-3">
          <Image
            src="/alexia-groupe.png"
            alt="Logo Alexia Groupe"
            width={150}
            height={150}
            priority
          />
          <h1 className="text-2xl font-bold text-blue-700">Alexia VTC</h1>
        </div>

        <nav className="space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Accueil
          </Link>
          <Link href="/compta" className="hover:text-blue-600">
            Alexia Compta
          </Link>
          <Link href="/multiservices" className="hover:text-blue-600">
            Alexia Multiservices
          </Link>
        </nav>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="flex flex-col items-center text-center flex-grow pt-28 px-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">
          Votre Chauffeur Privé, 24h/24 et 7j/7
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
          Alexia VTC met à votre disposition des chauffeurs professionnels,
          ponctuels et expérimentés pour tous vos déplacements privés,
          professionnels ou longue distance.
        </p>

        {/* IMAGES */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl">
          <Image
            src="/vtc.jpg"
            alt="Véhicule VTC"
            width={453}
            height={300}
            className="rounded-lg shadow"
          />
          <Image
            src="/vtc2.jpg"
            alt="Chauffeur privé"
            width={360}
            height={270}
            className="rounded-lg shadow"
          />
          <Image
            src="/vtc3.jpg"
            alt="Intérieur confortable VTC"
            width={293}
            height={200}
            className="rounded-lg shadow"
          />
        </div>

        {/* FORFAITS */}
        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
          <h3 className="text-3xl font-semibold mb-6 text-blue-700">
            Nos Forfaits
          </h3>

          <ul className="text-gray-700 space-y-3 text-left text-lg">
            <li>🚕 Trajets courte distance : <b>à partir de 10€</b></li>
            <li>✈️ Transfert aéroport : <b>à partir de 35€</b></li>
            <li>🌙 Trajets longue distance : <b>à partir de 55€</b></li>
            <li>🏙️ Mise à disposition demi-journée : <b>100€</b></li>
            <li>🚘 Mise à disposition journée complète : <b>180€</b></li>
            <li>💼 Service entreprises : <b>facturation disponible</b></li>
            <li>💳 Paiement accepté : espèces • carte bancaire</li>
          </ul>
        </section>

        {/* BOUTON CTA */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <a
            href="mailto:alexiaentreprise@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            📧 Réserver en ligne
          </a>

          <a
            href="https://wa.me/33652755294"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            💬 WhatsApp Direct
          </a>
        </div>
      </main>
{/* AVIS CLIENTS */}
<section className="mt-16 w-full max-w-6xl mx-auto px-6">
  <h3 className="text-3xl font-bold text-center mb-8 text-blue-700">
    ⭐ Avis de nos clients
  </h3>

  <div className="grid md:grid-cols-3 gap-6">

    {/* AVIS 1 */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center mb-3">
        <Image src="/client1.png" alt="Client" width={50} height={50} className="rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">Karim M.</p>
          <p className="text-yellow-500">★★★★★</p>
        </div>
      </div>
      <p className="text-gray-600">
        Chauffeur ponctuel et très professionnel. Je recommande vivement Alexia VTC !
      </p>
    </div>

    {/* AVIS 2 */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center mb-3">
        <Image src="/client2.png" alt="Client" width={50} height={50} className="rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">Feng B.</p>
          <p className="text-yellow-500">★★★★★</p>
        </div>
      </div>
      <p className="text-gray-600">
        Véhicule propre, conduite douce, service au top pour l’aéroport.
      </p>
    </div>

    {/* AVIS 3 */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center mb-3">
        <Image src="/client3.png" alt="Client" width={50} height={50} className="rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">Nadia R.</p>
          <p className="text-yellow-500">★★★★★</p>
        </div>
      </div>
      <p className="text-gray-600">
        Service irréprochable. Je passe toujours par Alexia VTC pour mes déplacements.
      </p>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg mb-2">📞 06 52 75 52 94</p>

          {/* Réseaux sociaux */}
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://facebook.com" target="_blank">
              <Image src="/facebook.png" alt="Facebook" width={28} height={28} />
            </a>
            <a href="https://linkedin.com/company/alexiagroupe" target="_blank">
              <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
            </a>
            <a href="https://instagram.com/alexiagroupe" target="_blank">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={28}
                height={28}
              />
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            © 2025 Alexia VTC - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}
