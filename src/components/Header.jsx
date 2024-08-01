import styles from "./Header.module.css";
import { LanguageSelector } from "./LanguageSelector";
import { content } from "../data/content";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Header() {
  const { language } = useContext(LanguageContext);
  return (
    <header className={styles.header}>
      {/* We will make a component for the nav later! */}
      <nav>
        <ul>
          {content[language].nav.map((navItem) => (
            <li key={navItem}>{navItem}</li>
          ))}
        </ul>
      </nav>
      <LanguageSelector />
    </header>
  );
}
