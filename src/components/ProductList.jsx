import React, { useEffect, useState } from "react";
import api from "../services/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleOrder = async () => {
    try {
      await api.post("/orders", { products: selected });
      setMessage("Commande passée !");
      setSelected([]);
    } catch {
      setMessage("Erreur lors de la commande.");
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center font-sans">Nos Produits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={p.image || 'https://via.placeholder.com/150x150?text=Produit'}
                alt={p.name}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h3>
              <p className="text-lg text-blue-700 font-bold mb-4">{p.price} €</p>
              <button
                onClick={() => handleSelect(p._id)}
                className={`w-full py-2 rounded-md font-semibold transition-all duration-200
                  ${selected.includes(p._id)
                    ? "bg-green-500 text-white shadow hover:bg-green-600"
                    : "bg-blue-600 text-white shadow hover:bg-blue-700"}
                `}
              >
                {selected.includes(p._id) ? "Sélectionné" : "Commander"}
              </button>
            </div>
          ))}
        </div>
        {selected.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleOrder}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-800 transition-all"
            >
              Valider ma commande ({selected.length})
            </button>
          </div>
        )}
        {message && (
          <div className="mt-6 text-center text-lg font-medium text-green-600 animate-pulse">
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;