"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/ui/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import FeatureCard from "../../components/ui/FeatureCard";

export default function Multiservices() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/multi2.jpg"
            alt="Travaux et Maintenance"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Votre Partenaire <span className="text-accent">Travaux & Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Une expertise unique pour tous vos besoins en électricité, plomberie, climatisation et rénovation. Réactivité et travail soigné garantis.
          </p>
          <Button href="#prestations" variant="primary">
            Découvrir nos solutions
          </Button>
        </div>
      </section>

      {/* Prestations Section */}
      <Section id="prestations" className="bg-white">
        <SectionHeading
          title="Nos Domaines d'Intervention"
          subtitle="Une offre complète pour l'habitat et l'entreprise"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { title: "Électricité", desc: "Installation, mise aux normes et dépannage urgence 7j/7.", bg: "bg-blue-50", icon: "⚡" },
            { title: "Plomberie", desc: "Réparation de fuites, débouchage et rénovation sanitaire.", bg: "bg-cyan-50", icon: "🚰" },
            { title: "Climatisation", desc: "Installation de systèmes de chauffage et maintenance annuelle.", bg: "bg-orange-50", icon: "❄️" },
            { title: "Sécurité", desc: "Alarmes, vidéosurveillance et contrôle d'accès pour votre sérénité.", bg: "bg-red-50", icon: "🔒" },
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-2xl ${item.bg} hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group`}>
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              <a href="#contact" className="text-primary font-semibold text-sm group-hover:text-accent transition-colors flex items-center">
                Demander un devis <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Maintenance Contract Highlight */}
      <Section className="bg-gray-100">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto">
            <Image src="/multi3.jpg" alt="Équipe technique" fill className="object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contrats de Maintenance</h3>
            <p className="text-gray-600 mb-6">
              Pour les professionnels et les copropriétés, nous proposons des contrats d'entretien annuels. Assurez la pérennité de vos installations et bénéficiez d'une priorité d'intervention.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-500 font-bold">✓</span> Visites de contrôle régulières
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-500 font-bold">✓</span> Dépannage prioritaire sous 4h
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-500 font-bold">✓</span> Rapport d'intervention détaillé
              </li>
            </ul>
            <Button href="mailto:alexiaentreprise@gmail.com?subject=Contrat Maintenance" variant="outline" className="self-start text-primary border-primary hover:bg-primary hover:text-white">
              Nous contacter
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <SectionHeading
          title="Ils nous font confiance"
          subtitle="Témoignages"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { name: "Sarah L.", text: "Intervention rapide et travail soigné. Mon installation électrique est comme neuve.", img: "/client9.png" },
            { name: "Louis R.", text: "Très bon service pour la climatisation. Professionnels et efficaces.", img: "/client8.png" },
            { name: "Patrick M.", text: "Travail impeccable. Plomberie réparée en moins d’une heure. Merci !", img: "/client7.png" }
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
      <Section className="bg-accent text-white text-center" id="contact">
        <h2 className="text-3xl font-bold mb-6">Une urgence ? Un projet ?</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Nos équipes techniques sont prêtes à intervenir. Contactez-nous pour une estimation gratuite.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="tel:0652755294" variant="secondary" className="bg-white text-accent hover:bg-gray-100 border-transparent">
            Appeler le 06 52 75 52 94
          </Button>
          <Button href="mailto:alexiaentreprise@gmail.com" variant="outline" className="border-white text-white hover:bg-white/20">
            Demander un devis en ligne
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
