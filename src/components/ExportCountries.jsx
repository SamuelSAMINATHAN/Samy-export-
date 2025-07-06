import React from "react";

const countries = [
  { name: "United Kingdom", flag: "/flags/uk.png" },
  { name: "France", flag: "/flags/fr.png" },
  { name: "Deutschland", flag: "/flags/de.png" },
];

export default function ExportCountries() {
  return (
    <section id="exports" className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-red-700 mb-6 text-center font-serif">Export Countries</h3>
        <div className="flex overflow-x-auto gap-8 py-4 justify-center">
          {countries.map((c, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[100px]">
              <img
                src={c.flag}
                alt={`Flag of ${c.name}`}
                className="w-12 h-12 object-contain mb-2"
              />
              <span className="text-gray-700 font-medium">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
