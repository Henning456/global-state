import { content } from "../data/content";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function MainContent() {
  const { language } = useContext(LanguageContext);
  return (
    <main>
      <h2>{content[language].title}</h2>
      <p>{content[language].description}</p>
    </main>
  );
}
