import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("i18nextLng", e.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleChange}
      className="border rounded px-2 py-1 text-sm ml-2"
      aria-label="Changer de langue"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
} 