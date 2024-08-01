import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <p
      style={{
        backgroundColor: "purple",
        color: "white",
      }}
    >
      {content[language].footer}
    </p>
  );
}
