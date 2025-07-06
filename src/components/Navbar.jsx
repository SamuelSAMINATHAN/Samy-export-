import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo fictif */}
      <div className="flex items-center space-x-2">
        <img src="/logo_coko.jpg" alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-blue-700 tracking-tight font-sans">SamyExports</span>
      </div>
      {/* Liens */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Accueil</Link>
        {user && (
          <Link to="/mes-commandes" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
            Mes commandes
          </Link>
        )}
        {user && user.role === "admin" && (
          <Link to="/admin" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
            Admin
          </Link>
        )}
        {!user ? (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors font-semibold"
          >
            Connexion
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors font-semibold"
          >
            Déconnexion
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;