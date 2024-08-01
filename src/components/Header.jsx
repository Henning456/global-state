import styles from "./Header.module.css";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  return (
    <header className={styles.header}>
      {/* We will make a component for the nav later! */}
      <nav>
        <ul>
          {["Home", "Contact", "Products"].map((navItem) => (
            <li key={navItem}>{navItem}</li>
          ))}
        </ul>
      </nav>
      <LanguageSelector />
    </header>
  );
}
