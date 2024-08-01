import styles from "./Box.module.css";

export function Box({ productName, children }) {
  return (
    <div className={styles.box}>
      <h2>{productName}</h2>
      {children}
    </div>
  );
}
