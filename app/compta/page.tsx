"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";

export default function Compta() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/compta2.jpg"
            alt="Expertise Comptable"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expertise Comptable <span className="text-accent">Professionnelle</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Alexia Compta vous accompagne avec rigueur dans la gestion de vos finances, votre conformité fiscale et le développement de votre entreprise.
          </p>
          <Button href="#forfaits" variant="primary">
            Voir nos forfaits
          </Button>
        </div>
      </section>

      {/* Forfaits Section */}
      <Section id="forfaits" className="bg-white">
        <SectionHeading
          title="Nos Solutions d'Accompagnement"
          subtitle="Des forfaits adaptés à chaque étape de votre croissance"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {/* Basic */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Forfait Basic</h3>
            <p className="text-gray-500 text-sm mb-6">Pour les petites structures</p>
            <div className="text-4xl font-bold text-primary mb-6">
              59€<span className="text-lg text-gray-500 font-normal">/mois</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-600 flex-grow">
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span> Comptabilité annuelle
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span> Déclarations fiscales simples
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span> Support par email
              </li>
            </ul>
            <Button href="mailto:alexiaentreprise@gmail.com?subject=Devis Forfait Basic" variant="secondary" className="w-full justify-center">
              Choisir ce forfait
            </Button>
          </div>

          {/* Pro */}
          <div className="bg-primary text-white rounded-2xl shadow-xl p-8 flex flex-col transform md:-translate-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAIRE</div>
            <h3 className="text-2xl font-bold mb-2">Forfait Pro</h3>
            <p className="text-gray-400 text-sm mb-6">Pour les entreprises en croissance</p>
            <div className="text-4xl font-bold text-white mb-6">
              99€<span className="text-lg text-gray-400 font-normal">/mois</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
              <li className="flex items-center gap-3">
                <span className="text-accent">✓</span> Gestion complète
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✓</span> Déclarations TVA
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✓</span> Bilan annuel
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✓</span> Support prioritaire
              </li>
            </ul>
            <Button href="mailto:alexiaentreprise@gmail.com?subject=Devis Forfait Pro" variant="primary" className="w-full justify-center bg-accent hover:bg-accent-hover border-transparent">
              Choisir ce forfait
            </Button>
          </div>

          {/* Premium */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Forfait Premium</h3>
            <p className="text-gray-500 text-sm mb-6">Accompagnement intégral</p>
            <div className="text-4xl font-bold text-primary mb-6">
              149€<span className="text-lg text-gray-500 font-normal">/mois</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-600 flex-grow">
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span> Tout inclus (Gestion + TVA + Bilan)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span> Conseils illimités
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span> Optimisation fiscale
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span> Tableau de bord mensuel
              </li>
            </ul>
            <Button href="mailto:alexiaentreprise@gmail.com?subject=Devis Forfait Premium" variant="secondary" className="w-full justify-center">
              Choisir ce forfait
            </Button>
          </div>
        </div>
      </Section>

      {/* Types d'entreprise */}
      <Section className="bg-gray-50">
        <SectionHeading
          title="Nous accompagnons tous les statuts"
          subtitle="Une expertise adaptée à votre forme juridique"
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {["SASU", "EURL", "SARL", "SAS", "EI", "Micro-Entreprise"].map((type) => (
            <div key={type} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-bold text-primary hover:bg-primary hover:text-white transition-all cursor-default">
              {type}
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <SectionHeading
          title="Ce que disent nos clients"
          subtitle="Témoignages"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { name: "Marc D.", text: "Une équipe comptable réactive et très claire dans ses explications. Je recommande.", img: "/client4.png" },
            { name: "Amina T.", text: "Très pro ! Ils m’ont aidée à structurer ma micro-entreprise dès le début.", img: "/client5.png" },
            { name: "Julien P.", text: "Service comptable impeccable, toujours disponible pour répondre à mes questions.", img: "/client6.png" }
          ].map((avis, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={avis.img} alt={avis.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{avis.name}</p>
                  <div className="text-accent text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{avis.text}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à simplifier votre comptabilité ?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="mailto:alexiaentreprise@gmail.com" variant="primary" className="bg-accent hover:bg-accent-hover text-white">
            Demander un devis
          </Button>
          <Button href="tel:0652755294" variant="outline">
            Nous appeler
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
