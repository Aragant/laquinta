"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSticky, setIsSticky] = useState(true);
  const [finalTop, setFinalTop] = useState(0); // Position finale une fois sticky désactivé

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 2050) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setFinalTop(2050); // Fixe la position à 2050px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p id={styles.followHeader}>Follow</p>
        <Image
          id={styles.logo}
          src="/laquinta/barcelos.png"
          alt="logo"
          width={150}
          height={150}
        ></Image>
        <p id={styles.carteHeader}>Carte</p>
      </div>

      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div
            className={`${styles.mainTitleContainer} ${
              isSticky ? styles.sticky : styles.relative
            }`}
            style={!isSticky ? { top: `${finalTop}px` } : {}}
          >
            <h1 className={styles.mainTitle}>La Quinta</h1>
            <div className={styles.mainSubtitleContainer}>

            <div className={styles.roundedFirstBorder}>
              <div className={styles.roudedSecondBorder}>
                <div className={styles.roundedEdge}> CONFLANS<br />ST<br />HONORINE</div>
              </div>
            </div>

              <h2 className={styles.mainSubtitle}>traiteur portugais</h2>

              <div className={styles.roundedFirstBorder}>
              <div className={styles.roudedSecondBorder}>
                <div className={styles.roundedEdge}>SINCE<br />2025</div>
              </div>
            </div>
            </div>


            
          </div>

          <div className={styles.mainImageContainer}>
            <Image
              src="/laquinta/roasted-chicken.png"
              alt="chicken"
              width={600}
              height={600}
            ></Image>
            <Image
              src="/laquinta/potatoes.png"
              alt="chicken"
              width={600}
              height={600}
            ></Image>
            <Image
              src="/laquinta/pastel-de-nata.png"
              alt="pasted de nata"
              width={600}
              height={600}
            ></Image>
          </div>

          <div className={styles.horaireAddressContainer}>
            <h2 className={styles.horaireTitle}>
              Nos Horaire
            </h2>
            <h3 className={styles.weekTitle}>MERCREDI AU VENDREDI</h3>
            <p className={styles.weekHoraire}>10h - 14h / 15h30 - 20h</p>
            <h3 className={styles.weekTitle}>SAMEDI</h3>
            <p className={styles.weekHoraire}>9h - 14h / 15h30 - 20h</p>
            <h3 className={styles.weekTitle}>DIMANCHE</h3>
            <p className={styles.weekHoraire}>9h - 14h</p>
            <p className={styles.addressText}>20 RUE MAURICE BERTEAUX,<br />78700 CONFLANS-SAINT-<br />HONORINE</p>

            <Image className={styles.bomApetite} src={"/laquinta/bomApetite.png"} alt="bom apetite" width={300} height={200}></Image>

          </div>


          <p className={styles.textPresentation}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            sed animi facere et commodi consectetur aliquam voluptatum ullam
            reprehenderit iusto, molestias fugit incidunt! Dignissimos beatae
            dolorem quo modi nobis vero. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi sed animi facere et commodi consectetur
            aliquam voluptatum ullam reprehenderit iusto, molestias fugit
            incidunt! Dignissimos beatae dolorem quo modi nobis vero. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed
            animi facere et commodi consectetur aliquam voluptatum ullam
            reprehenderit iusto, molestias fugit incidunt! Dignissimos beatae
            dolorem quo modi nobis vero.
          </p>

          <div className={styles.bigDiv}></div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  );
}
