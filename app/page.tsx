"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    let nbPoulet = 0; // Nombre de poulets à l'écran
    const maxPoulets = 40;
    const src_image = ['/laquinta/roasted-chicken.png', '/laquinta/pastel-de-nata.png'];
    // Fonction pour générer un poulet avec des caractéristiques aléatoires
    function createPoulet() {
      console.log(nbPoulet);
      if (nbPoulet >= maxPoulets) return;
      nbPoulet++;
      const random_image = src_image[Math.floor(Math.random() * src_image.length)];
      const poulet = document.createElement('img');
      poulet.src = random_image;
      poulet.classList.add('poulet');

      // Attribuer des tailles aléatoires
      const size = Math.random() * 100 + 50; // Taille entre 50px et 150px
      poulet.style.width = `${size}px`;
      poulet.style.height = `${size}px`;

      // Positionner le poulet à un endroit aléatoire en haut de l'écran
      poulet.style.left = `${Math.random() * 100}vw`;  // Position horizontale aléatoire

      // Ajouter le poulet à l'écran
      document.getElementById('container')?.appendChild(poulet);


      setTimeout(() => {
        poulet.remove(); 
        nbPoulet--; 
      },  5000+ Math.random() * 5000);

      const interval = setInterval(createPoulet, 500 + Math.random() * 1000);
      return () => clearInterval(interval);
    }

    // Lancer la génération des poulets
    createPoulet();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.containerOfContainer}>
          <div id="container"></div>
        </div>
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
