import React from "react";
import TrendingProducts from "../components/TrendingProducts";

export default function Products() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-700 mb-12 text-center font-serif uppercase tracking-wide">
          Nos Produits
        </h1>
        <TrendingProducts />
      </div>
    </section>
  );
} 