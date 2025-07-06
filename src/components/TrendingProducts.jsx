import React from "react";

const products = [
  {
    name: "Chicken curry",
    desc: "Un mélange d'épices authentique pour vos currys.",
    image: "/product1.jpeg",
  },
  {
    name: "Mutton curry",
    desc: "Le classique des épices indiennes, parfumé et puissant.",
    image: "/product2.jpeg",
  },
  {
    name: "Fish Masala",
    desc: "Pour relever tous vos plats avec intensité.",
    image: "/product3.jpeg",
  },
  {
    name: "Sambar Masala",
    desc: "La couleur et la santé dans vos recettes.",
    image: "/product4.jpeg",
  },
];

export default function TrendingProducts() {
  return (
    <section id="products" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-700 mb-8 text-center font-serif">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-4 text-center">{p.desc}</p>
              <a
                href="#products"
                className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition"
              >
                View all Products
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
