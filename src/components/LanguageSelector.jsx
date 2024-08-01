import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export function LanguageSelector() {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <select
      value={language}
      onChange={(event) => {
        console.log(event.target.value);
        changeLanguage(event.target.value);
      }}
    >
      {content[language].languages.map((languageConfig) => {
        return (
          <option key={languageConfig.key} value={languageConfig.key}>
            {languageConfig.value}
          </option>
        );
      })}
    </select>
  );
}
