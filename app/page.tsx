"use client";

import { useRef } from "react";
import Address from "./components/address/address";
import Description from "./components/description/description";
import Footer from "./components/footer/footer";
import Horaires from "./components/horaires/horaires";
import Product from "./components/product/product";
import Title from "./components/title/title";
import VinoPres from "./components/vinoPres/vinoPres";
import styles from "./page.module.css";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <main className={styles.main}>
        <div ref={containerRef} className={styles.container}>
          <div className={styles.horizontalWrapper}>
            <section className={styles.page}>
              <Title />
            </section>
            <section className={styles.page}>
              <Description />
            </section>
            <section className={styles.page}>
              <Horaires />
            </section>
            <section className={styles.page}>
              <Product />
            </section>
            {/* <section className={styles.page}>
              <VinoPres />
            </section> */}
            <section className={styles.page}>
              <Address />
            </section>
            <section className={styles.page}>
              <Footer />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
