import React from "react";

export default function NotreHistoireSection() {
  return (
    <section id="notre-histoire" className="relative bg-white py-20">
      {/* Titre géant en fond */}
      <h1 className="absolute left-1/2 top-10 -translate-x-1/2 text-[7vw] font-extrabold text-gray-100 select-none pointer-events-none z-0 uppercase tracking-widest">
        NOTRE HISTOIRE
      </h1>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Sous-titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-serif">
          L’HÉRITAGE D’UNE ENTREPRISE FAMILIALE
        </h2>

        {/* Bloc 1 */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-7/12 md:pr-12">
            <p className="text-gray-700 text-lg mb-6">
              Notre entreprise d’exportation est née de la vision de M. <span className="font-semibold">[Nom du gérant]</span>, un agriculteur passionné originaire du Tamil Nadu. Issu d’une famille d’agriculteurs de génération en génération, il a décidé de valoriser les richesses de sa région en exportant des produits naturels et authentiques à l’international. Depuis ses débuts, il s’engage à promouvoir une agriculture respectueuse, sans pesticide et tournée vers la qualité.
            </p>
          </div>
          <div className="md:w-5/12 flex flex-col items-center">
            <img
              src="patron.jpg"
              alt="Portrait du gérant"
              className="rounded-xl shadow-lg w-64 h-64 object-cover mb-2"
            />
            <span className="block text-center text-gray-600 font-medium mt-2">
              M. [Nom du gérant] – Fondateur de l’entreprise
            </span>
          </div>
        </div>

        {/* Bloc 2 - Inversé */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-7/12 md:pl-12">
            <p className="text-gray-700 text-lg mb-6">
              L’entreprise s’est rapidement développée et s’est dotée d’une infrastructure moderne pour répondre aux exigences des marchés internationaux. Notre site de production situé au cœur du Tamil Nadu témoigne de cet ancrage local et de notre volonté de rester proches de nos terres et de nos producteurs.
            </p>
          </div>
          <div className="md:w-5/12 flex flex-col items-center">
            <img
              src="samy.jpeg"
              alt="Bâtiment de l’entreprise"
              className="rounded-xl shadow-lg w-64 h-64 object-cover mb-2"
            />
            <span className="block text-center text-gray-600 font-medium mt-2">
              Notre site de production – Tamil Nadu
            </span>
          </div>
        </div>

        {/* Bloc 3 */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-7/12 md:pr-12">
            <p className="text-gray-700 text-lg mb-6">
              Avec l’installation de nos machines, nous avons structuré une production efficace et qualitative, sans jamais perdre l’authenticité de nos produits. Notre outil industriel est conçu pour soutenir une production responsable et durable.
            </p>
          </div>
          <div className="md:w-5/12 flex flex-col items-center">
            <img
              src="machine.jpeg"
              alt="Nos machines"
              className="rounded-xl shadow-lg w-64 h-64 object-cover mb-2"
            />
            <span className="block text-center text-gray-600 font-medium mt-2">
              Nos machines – Un savoir-faire en évolution
            </span>
          </div>
        </div>

        {/* Citation */}
        <div className="text-center mt-12">
          <blockquote className="text-2xl font-bold text-gray-700 italic">
            “Une histoire bâtie sur le travail, la passion et le respect de nos terres.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
