import React, { useEffect, useState } from "react";
import api from "../services/api";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Mes commandes</h2>
      {orders.length === 0 ? (
        <p>Aucune commande.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              {order.products.map((p) => p.name).join(", ")} - Statut : {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;