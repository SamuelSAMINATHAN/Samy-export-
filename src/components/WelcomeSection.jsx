import React from "react";
import { useTranslation } from "react-i18next";

export default function WelcomeSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 font-serif">{t("welcome_title")}</h2>
          <p className="text-gray-700 mb-6">{t("welcome_desc")}</p>
          <a
            href="#"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            {t("read_more")}
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="epice.png"
            alt={t("welcome_img_alt")}
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
