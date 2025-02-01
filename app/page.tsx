import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.header}>
          <p id={styles.followHeader}>Follow</p>
          <p>logo</p>
          <p id={styles.carteHeader}>Carte</p>
        </div>

      <main className={styles.main}>



        <div className={styles.mainTitleContainer}>
          <h1 className={styles.mainTitle}>La Quinta</h1>
          <h2 className={styles.mainSubtitle}>traiteur portugais</h2>
          <div className={styles.mainImageContainer}>
            <Image src="/laquinta/roasted-chicken.png" alt="chicken" width={600} height={600}></Image>
            <Image src="/laquinta/potatoes.png" alt="chicken" width={600} height={600}></Image>
            <Image src="/laquinta/pastel-de-nata.png" alt="pasted de nata" width={600} height={600}></Image>
          </div>
        </div>


      </main>
      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  );
}
