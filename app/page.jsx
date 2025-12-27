"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Assuming Footer is created in components root
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 mix-blend-overlay"></div> {/* Optional pattern */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary-light to-transparent opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium tracking-wide mb-6 backdrop-blur-sm">
            Excellence & Polyvalence
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Alexia <span className="text-accent">Groupe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Votre partenaire de confiance unique pour la gestion comptable, le transport privé et les services multiservices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#services" variant="primary" className="text-lg px-8 py-4">
              Découvrir nos univers
            </Button>
            <Button href="#contact" variant="outline" className="text-lg px-8 py-4">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services" className="bg-white">
        <SectionHeading
          title="Nos Domaines d'Expertise"
          subtitle="Une offre globale pour vous simplifier la vie"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Alexia Compta"
            description="Cabinet d'expertise comptable pour la gestion financière, fiscale et sociale de votre entreprise. Des forfaits adaptés aux créateurs et PME."
            imageSrc="/compta.jpg"
            href="/compta"
            delay={0}
          />

          <FeatureCard
            title="Alexia VTC"
            description="Service de transport de personnes avec chauffeur. Déplacements professionnels, privés, et transferts aéroport 24h/24 et 7j/7."
            imageSrc="/vtc.jpg"
            href="/vtc"
            delay={100}
          />

          <FeatureCard
            title="Alexia Multiservices"
            description="Solutions complètes pour vos travaux : électricité, plomberie, climatisation, rénovation et installation de systèmes de sécurité."
            imageSrc="/multi4.jpg"
            href="/multiservices"
            delay={200}
          />
        </div>
      </Section>

      {/* Trust/Stats Section */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
          <div className="p-4">
            <div className="text-4xl font-bold text-accent mb-2">10+</div>
            <div className="text-gray-400 font-medium">Années d'Expérience</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-gray-400 font-medium">Clients Satisfaits</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-gray-400 font-medium">Disponibilité VTC</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-accent mb-2">3</div>
            <div className="text-gray-400 font-medium">Pôles d'Expertise</div>
          </div>
        </div>
      </section>

      {/* About & Contact Preview */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Rapide</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-full text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Notre Siège</p>
                    <p className="text-gray-600">12 allée de la Madeleine<br />92220 BAGNEUX</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-full text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Téléphone</p>
                    <p className="text-gray-600">06 52 75 52 94</p>
                    <p className="text-xs text-gray-500 mt-1">Du mardi au samedi de 9h à 19h</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button href="mailto:alexiaentreprise@gmail.com" variant="primary" className="w-full justify-center">
                  Nous envoyer un email
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2" id="about">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">À Propos d'Alexia Groupe</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">L'excellence au service de vos besoins</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fondé sur des valeurs de rigueur et de professionnalisme, Alexia Groupe est né de la volonté d'offrir un accompagnement complet aux particuliers et aux entreprises.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Que ce soit pour sécuriser votre gestion comptable, assurer vos déplacements en toute sérénité ou réaliser vos projets de travaux, nos équipes dédiées s'engagent à vous fournir une qualité de service irréprochable.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-gray-900">Savoir-faire</h4>
                <p className="text-sm text-gray-500">Experts qualifiés dans chaque domaine</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-gray-900">Réactivité</h4>
                <p className="text-sm text-gray-500">Une réponse rapide à toutes vos demandes</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}