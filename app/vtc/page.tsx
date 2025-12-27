"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";

export default function VTC() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vtc-hero-new.png"
            alt="Chauffeur VTC Luxe"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <span className="inline-block py-1 px-3 rounded-full border border-accent/50 text-accent text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
            Service Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Votre Chauffeur Privé <br /><span className="text-white">24h/24 et 7j/7</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            L'élégance et la ponctualité pour tous vos déplacements. Profitez d'un confort absolu à bord de nos véhicules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://wa.me/33652755294" variant="primary" className="bg-green-600 hover:bg-green-700 text-white border-transparent">
              <span className="mr-2">💬</span> WhatsApp Direct
            </Button>
            <Button href="mailto:alexiaentreprise@gmail.com" variant="outline">
              Réserver par Email
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section id="services" className="bg-white">
        <SectionHeading
          title="Une Expérience de Voyage Unique"
          subtitle="Nos Prestations"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            { title: "Transferts Aéroport", desc: "Liaisons vers Orly, Roissy CDG et Beauvais. Accueil pancarte inclus.", icon: "✈️" },
            { title: "Longue Distance", desc: "Déplacements dans toute la France et l'Europe sur devis.", icon: "🛣️" },
            { title: "Mise à Disposition", desc: "Chauffeur privé à l'heure, à la demi-journée ou à la journée.", icon: "🤵" },
            { title: "Business & Events", desc: "Transport de collaborateurs et événements d'entreprise.", icon: "briefcase" },
            { title: "Service VIP", desc: "Discrétion absolue et conduite souple pour vos déplacements privés.", icon: "⭐" },
            { title: "Confort à Bord", desc: "Wifi, chargeurs, bouteilles d'eau et presse du jour.", icon: "🛋️" },
          ].map((service, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon === "briefcase" ? "💼" : service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tarifs / Fleet Showcase */}
      <Section className="bg-gray-900 text-white">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl skew-y-3 transform md:translate-x-8 border-4 border-gray-800">
            <Image src="/vtc-interior-new.png" alt="Intérieur VTC Premium" fill className="object-cover" />
          </div>

          <div>
            <SectionHeading
              title="Tarifs Transparents"
              subtitle="La qualité au juste prix"
              align="left"
              className="text-white"
            />
            <ul className="space-y-6">
              {[
                { label: "Trajets courte distance", price: "dès 10€" },
                { label: "Transfert aéroport", price: "dès 35€" },
                { label: "Trajets longue distance", price: "dès 55€" },
                { label: "Mise à disposition 1/2 journée", price: "100€" },
                { label: "Mise à disposition journée", price: "180€" },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <span className="text-gray-300 font-medium">{item.label}</span>
                  <span className="text-accent font-bold text-xl">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">💳 CB Acceptée</span>
              <span className="flex items-center gap-2">💶 Espèces Acceptées</span>
              <span className="flex items-center gap-2">🧾 Facture disponible</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <SectionHeading title="L'avis de nos passagers" subtitle="Satisfaction Client" />
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-50 p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-sm">
            <p className="text-gray-600 italic mb-6">"Chauffeur ponctuel et très professionnel. Je recommande vivement Alexia VTC pour tous vos trajets aéroport !"</p>
            <div className="flex items-center gap-4">
              <Image src="/client1.png" alt="Karim" width={50} height={50} className="rounded-full" />
              <div>
                <div className="font-bold text-gray-900">Karim M.</div>
                <div className="text-accent text-xs">Voyageur fréquent</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-sm mt-8 md:mt-0">
            <p className="text-gray-600 italic mb-6">"Véhicule propre, conduite douce, service au top. C'est devenu mon chauffeur attitré."</p>
            <div className="flex items-center gap-4">
              <Image src="/client2.png" alt="Feng" width={50} height={50} className="rounded-full" />
              <div>
                <div className="font-bold text-gray-900">Feng B.</div>
                <div className="text-accent text-xs">Client Business</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-sm">
            <p className="text-gray-600 italic mb-6">"Service irréprochable. Je passe toujours par Alexia VTC pour mes déplacements personnels."</p>
            <div className="flex items-center gap-4">
              <Image src="/client3.png" alt="Nadia" width={50} height={50} className="rounded-full" />
              <div>
                <div className="font-bold text-gray-900">Nadia R.</div>
                <div className="text-accent text-xs">Client Particulier</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
