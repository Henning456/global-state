import { useState, createContext } from "react";

export const LanguageContext = createContext();

const languages = ["de", "en", "jp"];

export function LanguageProvider({ children }) {
  // de, en, jp
  const [language, setLanguage] = useState("en");

  function changeLanguage(newLanguage) {
    if (!languages.includes(newLanguage)) {
      return;
    }
    setLanguage(newLanguage);
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
