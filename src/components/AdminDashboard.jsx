import React, { useEffect, useState } from "react";
import api from "../services/api";

const AdminDashboard = () => {
  // Produits
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  // Commandes
  const [orders, setOrders] = useState([]);

  // Chargement initial
  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = () => {
    api.get("/products").then((res) => setProducts(res.data));
  };

  const fetchOrders = () => {
    api.get("/admin/orders").then((res) => setOrders(res.data));
  };

  // CRUD Produits
  const handleAddProduct = async (e) => {
    e.preventDefault();
    await api.post("/products", newProduct);
    setNewProduct({ name: "", price: "" });
    fetchProducts();
  };

  const handleDeleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  const handleUpdateProduct = async (id, data) => {
    await api.put(`/products/${id}`, data);
    fetchProducts();
  };

  // Changement statut commande
  const handleStatusChange = async (id, status) => {
    await api.put(`/admin/orders/${id}`, { status });
    fetchOrders();
  };

  return (
    <div>
      <h2>Admin - Produits</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Nom"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Prix"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - {p.price}€
            <button onClick={() => handleDeleteProduct(p._id)}>Supprimer</button>
            {/* Pour la mise à jour, tu peux ajouter un formulaire inline si besoin */}
          </li>
        ))}
      </ul>

      <h2>Admin - Commandes</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.products.map((p) => p.name).join(", ")} - Statut : {order.status}
            <select
              value={order.status}
              onChange={(e) => handleStatusChange(order._id, e.target.value)}
            >
              <option value="en attente">En attente</option>
              <option value="validée">Validée</option>
              <option value="expédiée">Expédiée</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;