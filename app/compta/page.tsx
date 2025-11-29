import Image from "next/image";

export default function Compta() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="flex justify-between items-center px-8 py-4 bg-gray shadow-md fixed w-full top-0 z-50">
        <div className="flex items-center space-x-3">
          <Image src="/alexia-groupe.png" alt="Logo Alexia Groupe" width={150} height={150} />
          <h1 className="text-2xl font-bold text-blue-700">Alexia Compta</h1>
        </div>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">Accueil</a>
          <a href="/vtc" className="hover:text-blue-600">Alexia VTC</a>
          <a href="/multiservices" className="hover:text-blue-600">Alexia Multiservices</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center flex-grow pt-28 px-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">Expertise Comptable Professionnelle</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Alexia Compta vous accompagne dans la gestion de vos finances, la comptabilité et la fiscalité de votre entreprise.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl">
          <Image src="/compta2.jpg" alt="Cabinet comptable" width={400} height={400} className="rounded-lg shadow" />
          <Image src="/compta3.jpg" alt="Bureau comptabilité" width={400} height={400} className="rounded-lg shadow" />
          <Image src="/compta4.jpg" alt="Équipe comptable" width={400} height={400} className="rounded-lg shadow" />
        </div>

        <section className="mt-12 bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Nos Forfaits</h3>
          <ul className="text-gray-700 space-y-2 text-left">
            <li>💼 Forfait Basic – Comptabilité annuelle : 59€/mois</li>
            <li>📊 Forfait Pro – Gestion + TVA + Bilan : 99€/mois</li>
            <li>🏢 Forfait Premium – Tout inclus + conseils illimités : 149€/mois</li>
          </ul>
        </section>
 {/* SECTION TYPES D'ENTREPRISE */}
        <section className="mt-12 bg-white-500 shadow-lg rounded-xl p-6 w-full max-w-4xl text-left">
          <h3 className="text-3xl font-semibold mb-6 text-blue-700 text-center">Les différents types d'entreprise</h3>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-200 p-4 rounded-xl font-bold text-blue-800">SASU</div>
            <div className="bg-gray-200 p-4 rounded-xl font-bold text-blue-800">EURL</div>
            <div className="bg-gray-200 p-4 rounded-xl font-bold text-blue-800">SARL</div>
            <div className="bg-gray-200 p-4 rounded-xl font-bold text-blue-800">SAS</div>
            <div className="bg-gray-200 p-4 rounded-xl font-bold text-blue-800">EI</div>
            <div className="bg-gray-200 p-4 rounded-xl font-bold text-blue-800">Micro‑Entreprise</div>
          </div>
        </section>

        <a
          href="mailto:alexiaentreprise@gmail.com"
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
   
          📩 Demander un devis
        </a>
      </main>

      {/* AVIS CLIENTS */}
      <section className="mt-16 w-full max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8 text-blue-700">
          ⭐ Avis de nos clients – Alexia Compta
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {/* AVIS 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Image src="/client4.png" alt="Client" width={50} height={50} className="rounded-full" />
              <div className="ml-3">
                <p className="font-semibold">Marc D.</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p className="text-gray-600">
              Une équipe comptable réactive et très claire dans ses explications. Je recommande.
            </p>
          </div>

          {/* AVIS 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Image src="/client5.png" alt="Client" width={50} height={50} className="rounded-full" />
              <div className="ml-3">
                <p className="font-semibold">Amina T.</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p className="text-gray-600">
              Très pro ! Ils m’ont aidée à structurer ma micro-entreprise dès le début.
            </p>
          </div>

          {/* AVIS 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Image src="/client6.png" alt="Client" width={50} height={50} className="rounded-full" />
              <div className="ml-3">
                <p className="font-semibold">Julien P.</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <p className="text-gray-600">
              Service comptable impeccable, toujours disponible pour répondre à mes questions.
            </p>
          </div>

        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">📞 06 52 75 52 94</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com/Alexiacompta" target="_blank"><Image src="/facebook.png" alt="Facebook" width={28} height={28} /></a>
            <a href="https://linkedin.com/company/alexiagroupe" target="_blank"><Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} /></a>
            <a href="https://instagram.com/alexiagroupe" target="_blank"><Image src="/instagram.png" alt="Instagram" width={28} height={28} /></a>
          </div>
          <p className="text-gray-400 text-sm mt-4">© 2025 Alexia Compta - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}
