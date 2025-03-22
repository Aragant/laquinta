import styles from "./address.module.css";
import Image from "next/image";

export default function Address() {
  return (
    <div className={styles.addressDiv}>
      <div className={styles.cardAddressLittleScreen}>
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

      <div className={styles.cardAddressBigScreen}>
      <div className={styles.portugalDiv}>
          <Image
            src={"/laquinta/PortugalBigScreen.svg"}
            alt={"Picture for decorate the page"}
            fill={true}
          ></Image>
        </div>

        <div className={styles.headOfPostageCard}>
          <p className={styles.textHeadOfPostageCard}>
          Le Portugal, entre traditions,<br/>saveurs et paysages enchanteurs.
          </p>
          <div className={styles.titlePostageCardDiv}>
            <h3 className={styles.titlePostageCard}>Nous rendre visite</h3>
            <p className={styles.subtitlePostageCard}>Toutes les saveurs du Portugal</p>
          </div>
          <div className={styles.stampPostageDiv}>
            <p className={styles.stampPostage}>
              Place<br/>stamp<br/>Here
            </p>
          </div>
        </div>

        <div className={styles.signAndAddressDiv}>
          <div className={styles.signDivAddress}>
            <p className={styles.roudedEndText}>Mot de la fin</p>
            <p className={styles.textSignAddressBigScreen}>
              Découvrez les saveurs<br />du Portugal dans une<br />ambiance chaleureuse.
              <br />À bientôt chez nous !
            </p>
          </div>
          <div className={styles.textAddressDivBigScreen}>
            <p className={styles.roundedTitleAddress}>Notre adresse</p>
            <p className={styles.textStreetAddress}>
              20 rue maurice<br />berteaux
            </p>
            <p className={styles.textCityAddress}>
              78700 Conflans-<br/>Sainte-Honorine
            </p>
          </div>
        </div>

        <div className={styles.endTextDivAddress}>
            <p>
              R. Conde Dom Henrique, 4800-412 Guimarães, Portugal
            </p>
        </div>
      </div>
    </div>
  );
}
