import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-lg">Samy Exports</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-red-400 transition">Home</a>
          <a href="#about" className="hover:text-red-400 transition">À propos</a>
          <a href="#products" className="hover:text-red-400 transition">Produits</a>
          <a href="#exports" className="hover:text-red-400 transition">Exports</a>
          <a href="#services" className="hover:text-red-400 transition">Services</a>
          <a href="#contact" className="hover:text-red-400 transition">Contact</a>
        </nav>
        <div className="mt-4 md:mt-0 text-sm">
          &copy; {new Date().getFullYear()} Samy Exports. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
