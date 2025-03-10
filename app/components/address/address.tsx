import styles from "./address.module.css";
import Image from "next/image";

export default function Address() {
  return (
    <div className={styles.addressDiv}>
      <div className={styles.cardAddress}>
        <div className={styles.portugalDiv}>
          <Image
            src={"/laquinta/Portugal.png"}
            alt={"Picture for decorate the page"}
            fill={true}
          ></Image>
        </div>

        <div className={styles.textAddressDiv}>
          <h3 className={styles.titleAddress}>Nous rendre visite</h3>
          <p className={styles.subtitleAddress}>
            Toutes les saveurs du Portugal
          </p>

          <p className={styles.roundedTitleAddress}>Notre adresse</p>
          <p className={styles.textStreetAddress}>
            20 rue maurice
            <br />
            berteaux
          </p>

          <p className={styles.textCityAddress}>
            78700 Conflans-
            <br />
            Sainte-Honorine
          </p>

          <hr className={styles.lineAddress} />

          <p className={styles.roudedEndText}>Mot de la fin</p>

          <p className={styles.textSignAddress}>
            Découvrez les saveurs
            <br />
            du Portugal dans une
            <br />
            ambiance chaleureuse.
            <br />À bientôt chez nous !
          </p>

          <p className={styles.endTextAddress}>
            20 rue Maurice Berteaux, 78700 Conflans-Sainte-Honorine
          </p>
        </div>
      </div>
    </div>
  );
}
