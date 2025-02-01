import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.mainTitleContainer}>
          <h1 className={styles.mainTitle}>La Quinta</h1>
          <h2 className={styles.mainSubtitle}>Traiteur portugais</h2>
          <Image src="/laquinta/roasted-chicken.png" alt="chicken" width={400} height={400}></Image>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  );
}
