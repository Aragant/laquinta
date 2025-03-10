"use client";

import Address from "./components/address/address";
import Description from "./components/description/description";
import Footer from "./components/footer/footer";
import Horaires from "./components/horaires/horaires";
import Pause from "./components/pause/pause";
import Title from "./components/title/title";
import VinoPres from "./components/vinoPres/vinoPres";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p>header</p>
        </header>

        <Title></Title>
 
        <Description></Description>

        <Horaires></Horaires>

        <Pause></Pause>

        <VinoPres></VinoPres>

        <Address></Address>

        <Footer></Footer>

      </main>
    </div>
  );
}
