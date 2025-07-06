import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const navLinks = [
  { key: "menu_home", to: "/" },
  { key: "menu_history", to: "/notre-histoire" },
  { key: "menu_news", to: "/actualites" },
  {
    key: "menu_products",
    dropdown: [
      { key: "menu_products", to: "/produits#epices" },
      { key: "menu_products", to: "/produits#cereales" },
      { key: "menu_products", to: "/produits#autres" },
    ],
  },
  { key: "menu_exports", to: "/exports" },
  { key: "menu_contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <img src="/logo_coko.jpg" alt="Co Ko Masala Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-red-700 font-serif tracking-tight">Samy Exports</span>
          <LanguageSwitcher />
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={idx} className="relative group">
                <button className="text-gray-700 font-medium hover:text-red-700 transition-colors" aria-haspopup="true">
                  {t(link.key)}
                </button>
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                  {link.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      to={item.to}
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700"
                      aria-label={t(item.key)}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                to={link.to}
                className="text-gray-700 font-medium hover:text-red-700 transition-colors"
                aria-label={t(link.key)}
              >
                {t(link.key)}
              </Link>
            )
          )}
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white shadow px-4 py-2 space-y-2">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={idx}>
                <span className="block text-gray-700 font-medium">{t(link.key)}</span>
                <div className="pl-4">
                  {link.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      to={item.to}
                      className="block py-1 text-gray-600 hover:text-red-700"
                      aria-label={t(item.key)}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                to={link.to}
                className="block text-gray-700 font-medium"
                aria-label={t(link.key)}
              >
                {t(link.key)}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
