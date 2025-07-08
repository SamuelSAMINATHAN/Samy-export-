import React from "react";
import { useTranslation } from "react-i18next";

export default function ActualitesPage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-12 font-serif uppercase tracking-wide">
          {t("news_title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Actualité 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <video
              src="/arun.mp4"
              controls
              className="rounded-lg max-h-[500px] w-auto object-contain bg-black mb-4"
              aria-label={t("news1_title")}
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">
              {t("news1_title")}
            </h2>
            <p className="text-gray-600 text-center">
              {t("news1_desc")}
            </p>
          </div>

          {/* Actualité 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img
              src="/concours-affiche.jpg"
              alt={t("news2_title")}
              className="rounded-lg max-h-[500px] w-auto object-contain bg-gray-100 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">
              {t("news2_title")}
            </h2>
            <p className="text-gray-600 text-center mb-4">
              {t("news2_desc")}
            </p>
            <a
              href="#participer"
              className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-orange-700 transition w-max"
            >
              {t("news2_btn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
