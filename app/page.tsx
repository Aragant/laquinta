import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.mainTitleContainer}>
          <h1 className={styles.mainTitle}>La Quinta</h1>
          <h2 className={styles.mainSubtitle}>Traiteur portugais</h2>
          <Image src="/roasted-chicken.jpg" alt="chicken" width={100} height={100}></Image>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  );
}
