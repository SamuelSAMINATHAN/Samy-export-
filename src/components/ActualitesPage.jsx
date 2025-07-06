import React from "react";

export default function ActualitesPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 font-serif uppercase tracking-wide">
          Actualités
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Actualité 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <video
              src="/arun.mp4"
              controls
              className="rounded-lg max-h-[500px] w-auto object-contain bg-black mb-4"
              aria-label="Vidéo actualité"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">
              Film soutenu par l'entreprise
            </h2>
            <p className="text-gray-600 text-center">
              Samy Exports a eu l’opportunité de soutenir un projet cinématographique et de participer à sa diffusion en France.
            </p>
          </div>

          {/* Actualité 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img
              src="/concours-affiche.jpg"
              alt="Affiche du concours de cuisine"
              className="rounded-lg max-h-[500px] w-auto object-contain bg-gray-100 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">
              Concours de cuisine en Inde
            </h2>
            <p className="text-gray-600 text-center">
              Participez à notre grand concours de cuisine en Inde et tentez de remporter 3 000 roupies. Mettez en avant votre talent et votre créativité culinaire !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
