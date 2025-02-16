"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSticky, setIsSticky] = useState(true);
  const [finalTop, setFinalTop] = useState(0); // Position finale une fois sticky désactivé

  useEffect(() => {
    const handleScroll = () => {
      const scrollLimit = window.innerWidth < 481 ? 800 : 2000;

      if (window.scrollY < scrollLimit) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setFinalTop(scrollLimit + 80); // Fixe la position à 2050px
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
          fill
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
                  <div className={styles.roundedEdge}>
                    {" "}
                    CONFLANS
                    <br />
                    ST
                    <br />
                    HONORINE
                  </div>
                </div>
              </div>

              <h2 className={styles.mainSubtitle}>traiteur portugais</h2>

              <div className={styles.roundedFirstBorder}>
                <div className={styles.roudedSecondBorder}>
                  <div className={styles.roundedEdge}>
                    SINCE
                    <br />
                    2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mainImageContainer}>
            <div className={styles.mainImage}>
              <Image
                className={styles.Image}
                src="/laquinta/roasted-chicken.png"
                alt="chicken"
                fill
              ></Image>
            </div>
            <div className={styles.mainImage}>
              <Image
                className={styles.Image}
                src="/laquinta/potatoes.png"
                alt="chicken"
                fill
              ></Image>
            </div>
            <div className={styles.mainImage}>
              <Image
                className={styles.Image}
                src="/laquinta/pastel-de-nata.png"
                alt="pasted de nata"
                fill
              ></Image>
            </div>
          </div>

          <div className={styles.horaireAddressContainer}>
            <h2 className={styles.horaireTitle}>Nos Horaire</h2>
            <h3 className={styles.weekTitle}>MERCREDI AU VENDREDI</h3>
            <p className={styles.weekHoraire}>10h - 14h / 15h30 - 20h</p>
            <h3 className={styles.weekTitle}>SAMEDI</h3>
            <p className={styles.weekHoraire}>9h - 14h / 15h30 - 20h</p>
            <h3 className={styles.weekTitle}>DIMANCHE</h3>
            <p className={styles.weekHoraire}>9h - 14h</p>
            <p className={styles.addressText}>
              20 RUE MAURICE BERTEAUX,
              <br />
              78700 CONFLANS-SAINT-
              <br />
              HONORINE
            </p>

            <div className={styles.bomApetiteContainer}>
              <Image
                className={styles.bomApetite}
                src={"/laquinta/bomApetite.png"}
                alt="bom apetite"
                fill
              ></Image>
            </div>
          </div>

          <div className={styles.funContainer}>
            <div className={styles.funTextContainer}>
              <div className={styles.funSubTextContainer}>
                <p className={styles.funText}>Nous avons des...</p>
                <p className={styles.funFood}>POULETS</p>
              </div>

              <div
                className={`${styles.funSubTextContainer} ${styles.funTextMidle}`}
              >
                <p className={styles.funText}>Nous avons des...</p>
                <p className={styles.funFood}>PATATES</p>
              </div>

              <div className={styles.funSubTextContainer}>
                <p className={styles.funText}>Nous avons des...</p>
                <p className={styles.funFood}>
                  POULET AVEC
                  <br />
                  DES PATATES
                </p>
              </div>
            </div>
            <div className={styles.funImageContainer}>
              <Image
                fill
                src="/laquinta/portugeseFoodVint.jpg"
                alt="Picture of vintage portuguese food"
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
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
