import styles from "./vinoPres.module.css";

export default function VinoPres() {
  return (
    <div className={`${styles.vinoPresDiv} `}>
      <div className={`${styles.imageFramed} ${styles.vinoPresImage}`}></div>
    </div>
  );
}
