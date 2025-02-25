import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
            <p>header</p>
        </header>

        <div className={styles.titleDiv}>
            <h1 className={styles.quintaLogo}>
                <Image src={"/Laquinta.svg"} alt={"Quinta Logo"} fill={true}></Image>
            </h1>
            <h1 className={styles.subtitle}>Epicerie ⬝ Traiteur ⬝ Portugais</h1>
        </div>

        <div className={styles.descriptionDiv}>
            <div className={styles.ticketDescription}>
                <h2 className={styles.titleDescription}>Présentation</h2>
                <p className={styles.textDescription}>
                Lucinda Morgado et Thierry Lemaire lancent &quot;La Quinta&quot;, une épicerie-traiteur portugaise, pour offrir des saveurs authentiques dans une ambiance conviviale.
                </p>
                <p className={styles.signatureDescription}>Bem-vindo</p>
            </div>
        </div>
      </main>
    </div>
  );
}
