import React from "react";
import { useTranslation } from "react-i18next";

const products = [
  {
    key: "chicken_curry",
    image: "/product1.jpeg",
    price: "5,90 €",
  },
  {
    key: "mutton_curry",
    image: "/product2.jpeg",
    price: "6,50 €",
  },
  {
    key: "fish_masala",
    image: "/product3.jpeg",
    price: "5,50 €",
  },
  {
    key: "sambar_masala",
    image: "/product4.jpeg",
    price: "4,90 €",
  },
];

export default function Produits() {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-700 mb-12 text-center font-serif uppercase tracking-wide">
          {t("products_title")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={p.image}
                alt={t(`product_${p.key}_name`)}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-red-700 mb-2 font-serif text-center">{t(`product_${p.key}_name`)}</h2>
              <p className="text-gray-600 mb-2 text-center">{t(`product_${p.key}_desc`)}</p>
              <div className="text-lg font-semibold text-gray-800 mb-4">{p.price}</div>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition w-full"
              >
                {t("product_order")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
