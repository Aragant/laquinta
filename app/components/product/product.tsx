import styles from "./product.module.css";

export default function Product() {
  return (
    <div className={styles.productDiv}>
      <div className={styles.productLittleScreen}>
        <p className={styles.textProduct}>
          LES INCON-
          <br />
          TOURNABLES DE LA CUISINE
        </p>
        <p className={styles.portuguesa}>Portuguesa</p>
      </div>

      <div className={styles.productBigScreen}></div>
    </div>
  );
}
