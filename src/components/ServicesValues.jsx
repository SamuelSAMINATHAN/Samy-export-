import React from "react";

export default function ServicesValues() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4">
        <div>
          <h3 className="text-2xl font-bold text-red-700 mb-4 font-serif">Nos Exports</h3>
          <p className="text-gray-700 mb-2">
            Nous exportons vers plus de 30 pays : USA, UK, Canada, Australie, Europe, Moyen-Orient, Afrique et bien plus.
          </p>
          <p className="text-gray-700">
            Nos produits sont certifiés et respectent les normes internationales de qualité et de sécurité alimentaire.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-red-700 mb-4 font-serif">Nos Valeurs</h3>
          <p className="text-gray-700 mb-2">
            Qualité, commerce équitable, innovation et engagement social sont au cœur de notre mission.
          </p>
          <p className="text-gray-700">
            Nous soutenons l’essor des communautés agricoles et promouvons le développement durable.
          </p>
        </div>
      </div>
    </section>
  );
}
