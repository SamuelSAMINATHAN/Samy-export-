import React from "react";
import { useTranslation } from "react-i18next";

export default function NotreHistoireSection() {
  const { t } = useTranslation();

  return (
    <section id="notre-histoire" className="relative bg-white py-20">
      <h1 className="absolute left-1/2 top-10 -translate-x-1/2 text-[7vw] font-extrabold text-gray-100 select-none pointer-events-none z-0 uppercase tracking-widest">
        {t("history_title")}
      </h1>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-serif">
          {t("history_subtitle")}
        </h2>

        {/* Bloc 1 */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-7/12 md:pr-12">
            <p className="text-gray-700 text-lg mb-6">
              {t("history_block1_text")}
            </p>
          </div>
          <div className="md:w-5/12 flex flex-col items-center">
            <img
              src="patron.jpg"
              alt={t("history_block1_legend")}
              className="rounded-xl shadow-lg w-64 h-64 object-cover mb-2"
            />
            <span className="block text-center text-gray-600 font-medium mt-2">
              {t("history_block1_legend")}
            </span>
          </div>
        </div>

        {/* Bloc 2 - Inversé */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-7/12 md:pl-12">
            <p className="text-gray-700 text-lg mb-6">
              {t("history_block2_text")}
            </p>
          </div>
          <div className="md:w-5/12 flex flex-col items-center">
            <img
              src="samy.jpeg"
              alt={t("history_block2_legend")}
              className="rounded-xl shadow-lg w-64 h-64 object-cover mb-2"
            />
            <span className="block text-center text-gray-600 font-medium mt-2">
              {t("history_block2_legend")}
            </span>
          </div>
        </div>

        {/* Bloc 3 */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-7/12 md:pr-12">
            <p className="text-gray-700 text-lg mb-6">
              {t("history_block3_text")}
            </p>
          </div>
          <div className="md:w-5/12 flex flex-col items-center">
            <img
              src="machine.jpeg"
              alt={t("history_block3_legend")}
              className="rounded-xl shadow-lg w-64 h-64 object-cover mb-2"
            />
            <span className="block text-center text-gray-600 font-medium mt-2">
              {t("history_block3_legend")}
            </span>
          </div>
        </div>

        {/* Citation */}
        <div className="text-center mt-12">
          <blockquote className="text-2xl font-bold text-gray-700 italic">
            {t("history_quote")}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
